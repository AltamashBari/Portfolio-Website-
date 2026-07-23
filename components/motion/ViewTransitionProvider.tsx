"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

type NavigateFn = (href: string) => void;

const ViewTransitionContext = createContext<NavigateFn | null>(null);

/** If the route somehow never resolves (navigation error, etc.), force the
 * transition closed after this long so the page never gets stuck under a
 * lingering "old page" snapshot. */
const SAFETY_TIMEOUT_MS = 4000;

/**
 * Bridges Next.js App Router's async client-side navigation with the
 * browser's View Transitions API.
 *
 * document.startViewTransition() expects its callback's returned promise to
 * resolve only once the DOM has actually finished updating to the "after"
 * state. router.push() doesn't provide that signal directly - it kicks off
 * an async RSC fetch and resolves the callback long before the new route's
 * content actually commits - so naively calling
 * document.startViewTransition(() => router.push(href)) causes the browser
 * to capture an "after" snapshot before anything has changed, then throw
 * "InvalidStateError: Transition was aborted because of invalid state" once
 * the real DOM update lands afterwards.
 *
 * This provider fixes that by staying mounted across the navigation (unlike
 * the page that triggered it) and watching usePathname(): the transition's
 * promise is only resolved once the pathname actually changes to the new
 * route, so the browser correctly waits for the real content before running
 * the visual transition.
 */
export function ViewTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const resolveRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (resolveRef.current) {
      resolveRef.current();
      resolveRef.current = null;
    }
    // Intentionally only re-runs when the route changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  function navigate(href: string) {
    if (typeof document === "undefined" || !("startViewTransition" in document)) {
      router.push(href);
      return;
    }

    try {
      const transition = (
        document as unknown as {
          startViewTransition: (cb: () => Promise<void>) => {
            ready: Promise<void>;
            finished: Promise<void>;
          };
        }
      ).startViewTransition(() => {
        return new Promise<void>((resolve) => {
          let settled = false;
          const finish = () => {
            if (settled) return;
            settled = true;
            resolve();
          };
          resolveRef.current = finish;
          setTimeout(finish, SAFETY_TIMEOUT_MS);
          startTransition(() => {
            router.push(href);
          });
        });
      });
      transition?.ready?.catch(() => {});
      transition?.finished?.catch(() => {});
    } catch {
      router.push(href);
    }
  }

  return (
    <ViewTransitionContext.Provider value={navigate}>{children}</ViewTransitionContext.Provider>
  );
}

/** Returns a navigate(href) function that morphs shared view-transition-name
 * elements between the current page and the destination when the browser
 * supports it, falling back to a plain router.push() otherwise. Must be used
 * within a ViewTransitionProvider (mounted once, in the root layout). */
export function useViewTransitionNavigate() {
  const ctx = useContext(ViewTransitionContext);
  if (!ctx) {
    throw new Error("useViewTransitionNavigate must be used within a ViewTransitionProvider");
  }
  return ctx;
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { navItems, profile } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Scroll-spy: highlights the nav item for whichever homepage section is
  // currently most in view. No-op on routes that don't have these sections
  // (e.g. /projects/[slug]) since querySelector simply finds nothing there.
  useEffect(() => {
    if (pathname !== "/" || typeof window === "undefined") return;
    const ids = navItems.map((item) => item.href.split("#")[1]).filter(Boolean) as string[];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveHash(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const onDark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-stone/60 bg-canvas/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      {onDark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ink/45 to-transparent"
        />
      )}

      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 md:px-10 lg:px-16">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={`text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:tracking-[0.28em] ${
            onDark ? "text-canvas" : "text-ink"
          }`}
        >
          {profile.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {navItems.map((item) => {
              const isActive = pathname === "/" && activeHash === item.href.split("#")[1];
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`group relative text-sm transition-all duration-300 hover:tracking-[0.02em] ${
                      isActive
                        ? "text-olive"
                        : onDark
                          ? "text-canvas/85 hover:text-canvas"
                          : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-olive transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`md:hidden ${onDark ? "text-canvas" : "text-ink"}`}
        >
          {open ? <X size={26} weight="light" /> : <List size={26} weight="light" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 -z-10 flex flex-col bg-canvas px-6 pb-10 pt-28 md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Mobile" className="flex-1">
              <ul className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block font-display text-4xl text-ink"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-stone pt-6 text-sm text-ink/70">
              <a href={`mailto:${profile.email}`} className="block hover:text-olive">
                {profile.email}
              </a>
              <p className="mt-1">{profile.location}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

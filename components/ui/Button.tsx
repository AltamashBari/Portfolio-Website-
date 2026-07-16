import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";

type Variant = "primary" | "light" | "ghost" | "ghost-light";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  external?: boolean;
  className?: string;
}

const base =
  "group inline-flex items-center gap-2.5 rounded-[2px] text-sm transition-colors duration-300";

const variants: Record<Variant, string> = {
  // For light sections
  primary: "bg-ink px-7 py-3.5 text-canvas hover:bg-olive",
  // For dark / image backgrounds
  light: "bg-canvas px-7 py-3.5 text-ink hover:bg-olive hover:text-canvas",
  // Understated text link
  ghost: "text-ink underline-offset-4 hover:text-olive",
  // Understated text link on dark / image backgrounds
  "ghost-light": "text-canvas underline-offset-4 hover:text-olive-soft",
};

export function Button({
  href,
  children,
  variant = "primary",
  withArrow = true,
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const arrow = withArrow ? (
    <ArrowRight
      size={16}
      weight="regular"
      className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:scale-125"
    />
  ) : null;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}

import type { ReactNode } from "react";

/** Page-width editorial container with consistent responsive gutters. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}

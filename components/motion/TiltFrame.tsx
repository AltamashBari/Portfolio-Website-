"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";

interface TiltFrameProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  max?: number;
}

/**
 * Cursor-tracked 3D tilt with spring physics and a moving light glare.
 * Uses motion values (no React state, no re-renders). Falls back to a plain
 * framed container under prefers-reduced-motion; on touch there is simply no
 * pointer to track, so it stays flat.
 */
export function TiltFrame({ children, className = "", max = 9 }: TiltFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 140, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 140, damping: 18, mass: 0.4 });

  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const gx = useTransform(sx, [0, 1], ["0%", "100%"]);
  const gy = useTransform(sy, [0, 1], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.28), transparent 55%)`;

  if (reduce) {
    return <div className={`overflow-hidden rounded-[2px] ${className}`}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ perspective: 1000 }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
    >
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-[2px] [transform-style:preserve-3d]"
        style={{ rotateX, rotateY }}
      >
        {children}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundImage: glare, mixBlendMode: "soft-light" }}
        />
      </motion.div>
    </div>
  );
}

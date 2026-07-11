"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Max vertical travel in px (image is oversized to stay covered). */
  strength?: number;
}

/**
 * Subtle vertical parallax driven by Motion's useScroll (no window listeners).
 * The image is over-sized by `strength` on top and bottom so no gap appears as
 * it translates. Static under prefers-reduced-motion.
 */
export function ParallaxImage({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className,
  strength = 60,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={className} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: -strength,
          bottom: -strength,
          y: reduce ? 0 : y,
        }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </motion.div>
    </div>
  );
}

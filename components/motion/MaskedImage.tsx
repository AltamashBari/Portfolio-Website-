"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

interface MaskedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Applied to the <img> (e.g. aspect + object-fit). */
  imgClassName?: string;
}

/**
 * Image that reveals with a slow settle from a slight zoom + fade as it scrolls
 * into view. Uses direct whileInView props (reliable) rather than variants.
 * Static under prefers-reduced-motion.
 */
export function MaskedImage({
  src,
  alt,
  width,
  height,
  sizes = "100vw",
  priority = false,
  className,
  imgClassName,
}: MaskedImageProps) {
  const reduce = useReducedMotion();

  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 1.08 }}
        whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: "100%", width: "100%" }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className={imgClassName}
        />
      </motion.div>
    </div>
  );
}

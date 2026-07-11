"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

type HeadingTag = "h1" | "h2" | "h3";

interface AnimatedHeadingProps {
  text: string;
  as?: HeadingTag;
  className?: string;
  delay?: number;
}

const container: Variants = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.07, delayChildren: delay },
  }),
};

const word: Variants = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Headline whose words rise into place from a clipped baseline. The real text
 * stays in the accessibility tree via aria-label; word spans are decorative.
 * Renders as plain static text under prefers-reduced-motion.
 */
export function AnimatedHeading({ text, as = "h2", className, delay = 0 }: AnimatedHeadingProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      aria-label={text}
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`}>
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "top",
              // Give descenders room before the clip edge without shifting layout.
              paddingBottom: "0.14em",
              marginBottom: "-0.14em",
            }}
          >
            <motion.span variants={word} style={{ display: "inline-block" }}>
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </MotionTag>
  );
}

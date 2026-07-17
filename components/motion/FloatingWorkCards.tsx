"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { getProject } from "@/lib/projects";

interface FloatingCardSpec {
  slug: string;
  className: string;
  rotate: number;
  duration: number;
  floatDelay: number;
  revealDelay: number;
  width: number;
}

const CARDS: FloatingCardSpec[] = [
  {
    slug: "300-bed-multispeciality-hospital",
    className: "right-[6%] top-[10%]",
    rotate: -6,
    duration: 6,
    floatDelay: 0,
    revealDelay: 0.6,
    width: 190,
  },
  {
    slug: "inter-state-bus-terminal",
    className: "right-[26%] top-[32%]",
    rotate: 4,
    duration: 7,
    floatDelay: 0.8,
    revealDelay: 0.85,
    width: 160,
  },
  {
    slug: "sky-residences-expo-city-dubai",
    className: "right-[4%] bottom-[12%]",
    rotate: -3,
    duration: 6.5,
    floatDelay: 0.4,
    revealDelay: 1.1,
    width: 240,
  },
  {
    slug: "corte-vetro-villa",
    className: "right-[30%] bottom-[30%]",
    rotate: 6,
    duration: 5.5,
    floatDelay: 1.1,
    revealDelay: 1.35,
    width: 140,
  },
];

/**
 * Desktop-only floating photo cluster in the hero, one image per major work
 * type (institutional, transit, high-rise, interior) - a quick visual survey
 * of the practice's range, echoing the "Hospitals, transit, and skylines"
 * headline. Hidden on touch/narrow viewports to avoid clutter; static under
 * prefers-reduced-motion.
 */
export function FloatingWorkCards() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
      {CARDS.map((card) => {
        const project = getProject(card.slug);
        if (!project) return null;
        const { cover } = project;
        return (
          <Reveal
            key={card.slug}
            delay={card.revealDelay}
            y={16}
            className={`absolute ${card.className}`}
          >
            <motion.div
              style={{ rotate: card.rotate, width: card.width }}
              animate={reduce ? undefined : { y: [0, -14, 0] }}
              transition={{
                duration: card.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: card.floatDelay,
              }}
              className="overflow-hidden rounded-[2px] border border-canvas/25 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.65)]"
            >
              <div style={{ aspectRatio: `${cover.width} / ${cover.height}` }} className="relative">
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </Reveal>
        );
      })}
    </div>
  );
}

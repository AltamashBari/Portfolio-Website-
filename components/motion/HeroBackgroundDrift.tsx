"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "motion/react";
import { getProject } from "@/lib/projects";
import type { ProjectImage } from "@/lib/types";

const SLUGS = [
  "300-bed-multispeciality-hospital",
  "inter-state-bus-terminal",
  "sky-residences-expo-city-dubai",
  "monte-south-residential-tower",
  "corte-vetro-villa",
];

/** Drift speed in pixels per second - slower than the Selected Work gallery
 * since these tiles fill the full viewport height. */
const SPEED = 34;

/**
 * Full-bleed hero background: a continuously drifting, seamlessly looping
 * strip of project photography (hospital, transit, high-rise, interior)
 * sliding left to right, echoing the "Hospitals, transit, and skylines"
 * headline and reusing the same drift-and-wrap technique as the homepage's
 * Selected Work gallery (FloatingRow). Falls back to a single static frame
 * under prefers-reduced-motion.
 */
export function HeroBackgroundDrift() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const halfWidth = useRef(0);

  const covers: ProjectImage[] = SLUGS.map((slug) => getProject(slug)?.cover).filter(
    (c): c is ProjectImage => Boolean(c),
  );

  useEffect(() => {
    if (!trackRef.current) return;
    halfWidth.current = trackRef.current.scrollWidth / 2;
    setReady(true);
  }, []);

  useAnimationFrame((_, delta) => {
    if (!halfWidth.current || reduce) return;
    let next = x.get() + SPEED * (delta / 1000);
    if (next <= -halfWidth.current) next += halfWidth.current;
    if (next >= 0) next -= halfWidth.current;
    x.set(next);
  });

  if (covers.length === 0) return null;

  if (reduce) {
    const first = covers[0];
    return (
      <div className="absolute inset-0">
        <Image
          src={first.src}
          alt={first.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div ref={trackRef} className="flex h-full" style={{ x, opacity: ready ? 1 : 0 }}>
        {[...covers, ...covers].map((cover, i) => (
          <div
            key={`${cover.src}-${i}`}
            className="relative h-full flex-none"
            style={{ aspectRatio: `${cover.width} / ${cover.height}` }}
          >
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority={i === 0}
              sizes="100vh"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

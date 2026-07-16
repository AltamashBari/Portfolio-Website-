"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "motion/react";
import type { Project } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { FloatingProjectCard } from "@/components/sections/FloatingProjectCard";

interface FloatingRowProps {
  /** 1-based row number shown in the label, e.g. "01 — Architectural Projects". */
  index?: number;
  label: string;
  projects: Project[];
  direction?: "left" | "right";
  /** Base drift speed in pixels per second. */
  speed?: number;
  priority?: boolean;
  /** Show the "01 — " numbered prefix. Off for the homepage teaser. */
  numbered?: boolean;
}

/**
 * A horizontally drifting, seamlessly looping strip of project cards -
 * the "Selected Works" floating gallery. Pauses on hover/focus, scrubs with
 * mouse drag, and falls back to a plain swipeable/scrollable row under
 * prefers-reduced-motion, on coarse-pointer (touch) devices, or when there
 * is only a single project (a looped single card would just look broken).
 */
export function FloatingRow({
  index = 1,
  label,
  projects,
  direction = "left",
  speed = 26,
  priority = false,
  numbered = true,
}: FloatingRowProps) {
  const reduce = useReducedMotion();
  const [isCoarse, setIsCoarse] = useState(false);
  const [ready, setReady] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const halfWidth = useRef(0);
  const paused = useRef(false);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartValue = useRef(0);

  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(pointer: coarse)");
    setIsCoarse(mq.matches);
    const onChange = () => setIsCoarse(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;
    halfWidth.current = trackRef.current.scrollWidth / 2;
    setReady(true);
  }, [projects]);

  const dir = direction === "left" ? -1 : 1;

  useAnimationFrame((_, delta) => {
    if (!halfWidth.current || paused.current || dragging.current) return;
    let next = x.get() + dir * speed * (delta / 1000);
    if (next <= -halfWidth.current) next += halfWidth.current;
    if (next >= 0) next -= halfWidth.current;
    x.set(next);
  });

  const staticFallback = reduce || isCoarse || projects.length <= 1;

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (staticFallback) return;
    dragging.current = true;
    paused.current = true;
    dragStartX.current = e.clientX;
    dragStartValue.current = x.get();
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging.current || !halfWidth.current) return;
    const delta = e.clientX - dragStartX.current;
    let next = dragStartValue.current + delta;
    while (next <= -halfWidth.current) next += halfWidth.current;
    while (next >= 0) next -= halfWidth.current;
    x.set(next);
  }

  function endDrag() {
    dragging.current = false;
    paused.current = false;
  }

  return (
    <div className="border-t border-stone py-10 first:border-t-0 md:py-14">
      <Container>
        <p className="label-eyebrow mb-6 text-taupe md:mb-8">
          {numbered ? `${String(index).padStart(2, "0")} — ${label}` : label}
        </p>
      </Container>

      {staticFallback ? (
        <div
          className={`flex gap-6 overflow-x-auto px-6 pb-2 md:px-10 lg:px-16 ${
            projects.length > 1 ? "snap-x snap-mandatory" : "justify-center"
          } [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
        >
          {projects.map((project, i) => (
            <div key={project.slug} className="snap-start">
              <FloatingProjectCard project={project} priority={priority && i === 0} />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="relative overflow-hidden"
          onPointerEnter={() => {
            paused.current = true;
          }}
          onPointerLeave={() => {
            paused.current = false;
            endDrag();
          }}
          onFocusCapture={() => {
            paused.current = true;
          }}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) paused.current = false;
          }}
        >
          <motion.div
            ref={trackRef}
            className="flex cursor-grab gap-6 px-6 active:cursor-grabbing md:px-10 lg:gap-8 lg:px-16"
            style={{ x, opacity: ready ? 1 : 0 }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            {[...projects, ...projects].map((project, i) => (
              <FloatingProjectCard
                key={`${project.slug}-${i}`}
                project={project}
                priority={priority && i === 0}
              />
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}

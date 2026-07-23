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

/** Minimum pointer travel, in px, before a press is treated as a drag rather than a click. */
const DRAG_THRESHOLD = 6;

/** How long to keep the drift paused after a drag/swipe gesture ends. */
const RESUME_DELAY = 1200;

/**
 * A horizontally drifting, seamlessly looping strip of project cards -
 * the "Selected Works" floating gallery. Pauses on hover/focus, scrubs with
 * mouse or touch drag, and falls back to a plain swipeable/scrollable row
 * only under prefers-reduced-motion or when there is only a single project
 * (a looped single card would just look broken). Runs on touch devices too:
 * `touch-action: pan-y` lets vertical page scroll pass through untouched
 * while horizontal drag is handled here.
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
  const [ready, setReady] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const halfWidth = useRef(0);
  const paused = useRef(false);
  const pressed = useRef(false);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartValue = useRef(0);
  const pointerId = useRef<number | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    halfWidth.current = trackRef.current.scrollWidth / 2;
    setReady(true);
  }, [projects]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  const dir = direction === "left" ? -1 : 1;

  useAnimationFrame((_, delta) => {
    if (!halfWidth.current || paused.current || dragging.current) return;
    let next = x.get() + dir * speed * (delta / 1000);
    if (next <= -halfWidth.current) next += halfWidth.current;
    if (next >= 0) next -= halfWidth.current;
    x.set(next);
  });

  const staticFallback = reduce || projects.length <= 1;

  function clearResumeTimer() {
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
  }

  // Pointer handling distinguishes a click (no capture, lets the underlying
  // Link navigate normally) from a drag (only engaged once the pointer has
  // travelled past DRAG_THRESHOLD). Capturing the pointer - and thus
  // rerouting the eventual click target to this container - on every single
  // press previously broke plain clicks on the cards.
  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (staticFallback) return;
    clearResumeTimer();
    pressed.current = true;
    dragging.current = false;
    dragStartX.current = e.clientX;
    dragStartValue.current = x.get();
    pointerId.current = e.pointerId;
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!pressed.current || !halfWidth.current) return;
    const delta = e.clientX - dragStartX.current;

    if (!dragging.current) {
      if (Math.abs(delta) < DRAG_THRESHOLD) return;
      dragging.current = true;
      paused.current = true;
      if (pointerId.current !== null) {
        e.currentTarget.setPointerCapture?.(pointerId.current);
      }
    }

    let next = dragStartValue.current + delta;
    while (next <= -halfWidth.current) next += halfWidth.current;
    while (next >= 0) next -= halfWidth.current;
    x.set(next);
  }

  // After a real drag/swipe, keep the drift paused briefly so the row
  // doesn't lurch back into motion the instant a thumb lifts off - then
  // resume automatically. A plain hover-leave (no drag) resumes instantly.
  function endDrag() {
    const wasDragging = dragging.current;
    pressed.current = false;
    dragging.current = false;

    if (wasDragging) {
      clearResumeTimer();
      resumeTimer.current = setTimeout(() => {
        paused.current = false;
        resumeTimer.current = null;
      }, RESUME_DELAY);
    } else {
      paused.current = false;
    }
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
              <FloatingProjectCard
                project={project}
                priority={priority && i === 0}
                viewTransitionName={`project-cover-${project.slug}`}
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="relative overflow-hidden"
          onPointerEnter={() => {
            clearResumeTimer();
            paused.current = true;
          }}
          onPointerLeave={() => {
            if (!dragging.current) paused.current = false;
            endDrag();
          }}
          onFocusCapture={() => {
            clearResumeTimer();
            paused.current = true;
          }}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) paused.current = false;
          }}
        >
          <motion.div
            ref={trackRef}
            className="flex cursor-grab gap-6 px-6 active:cursor-grabbing md:px-10 lg:gap-8 lg:px-16"
            style={{ x, opacity: ready ? 1 : 0, touchAction: "pan-y" }}
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
                viewTransitionName={i < projects.length ? `project-cover-${project.slug}` : undefined}
              />
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}

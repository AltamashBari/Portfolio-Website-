"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "@phosphor-icons/react/dist/ssr";

interface FaqItemProps {
  question: string;
  answer: string;
}

/**
 * Single FAQ row. Replaces native <details>/<summary> (instant snap) with an
 * animated height/opacity expand so opening a question feels considered
 * rather than jarring. Falls back to an instant toggle under
 * prefers-reduced-motion.
 */
export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="border-t border-stone/80 last:border-b">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
      >
        <h3 className="font-display text-xl text-ink md:text-2xl">{question}</h3>
        <Plus
          size={20}
          className={`shrink-0 text-olive transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="max-w-2xl pb-7 leading-relaxed text-brown/85">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

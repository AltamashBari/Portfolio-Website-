"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * template.tsx re-mounts on every navigation, so this gives each page a quiet
 * enter transition (fade + rise). We use enter-on-mount rather than
 * AnimatePresence exit, which is unreliable across App Router navigations.
 * Only transform/opacity are animated. Static under reduced motion.
 */
export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

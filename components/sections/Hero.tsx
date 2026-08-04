"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { HeroBackgroundDrift } from "@/components/motion/HeroBackgroundDrift";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Depth parallax as the hero scrolls out of view: the background drift
  // layer lags behind (translates less than the scroll distance) while the
  // foreground copy leads and fades - the same background-slower /
  // foreground-faster read used for the case-study hero images in
  // ParallaxImage, just driven by the hero's own scroll-out range instead
  // of scroll-into-view.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] w-full overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: reduce ? 0 : bgY }}>
        <HeroBackgroundDrift />
      </motion.div>

      {/* Scrim for legible light text over the render */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/40"
      />

      <motion.div style={{ y: reduce ? 0 : contentY, opacity: reduce ? 1 : contentOpacity }}>
        <Container className="relative flex min-h-[100dvh] flex-col justify-end pb-16 pt-24 md:pb-24">
          <div className="max-w-4xl">
            <Reveal>
              <p className="label-eyebrow text-canvas/80">Altamash Bari, Architect</p>
            </Reveal>

            <AnimatedHeading
              as="h1"
              text="Hospitals, transit, and skylines."
              delay={0.15}
              className="mt-6 max-w-3xl font-display text-[clamp(2.6rem,7vw,6rem)] font-medium leading-[0.98] tracking-[-0.02em] text-canvas"
            />

            <Reveal delay={0.35}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-canvas/85">
                An architect designing across India and the UAE, where clarity, climate, and human
                experience meet.
              </p>
            </Reveal>

            <Reveal delay={0.45} className="mt-10 flex flex-wrap items-center gap-6">
              <Button href="/#work" variant="light">
                View Work
              </Button>
              <Button href="/#contact" variant="ghost-light">
                Get in touch
              </Button>
            </Reveal>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}

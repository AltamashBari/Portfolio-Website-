import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <ParallaxImage
          src="/portfolio/monte-south/cover.jpg"
          alt="Monte South twin residential towers rising above a landscaped podium in South Mumbai"
          priority
          sizes="100vw"
          strength={80}
          className="h-full w-full"
        />
      </div>

      {/* Scrim for legible light text over the render */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/40"
      />

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
    </section>
  );
}

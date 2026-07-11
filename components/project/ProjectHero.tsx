import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import type { Project } from "@/lib/types";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <ParallaxImage
          src={project.cover.src}
          alt={project.cover.alt}
          priority
          sizes="100vw"
          strength={80}
          className="h-full w-full"
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/35"
      />

      <Container className="relative flex min-h-[85vh] flex-col justify-end pb-16 pt-32 md:pb-24">
        <Reveal>
          <p className="label-eyebrow text-canvas/75">{project.category}</p>
        </Reveal>

        <AnimatedHeading
          as="h1"
          text={project.title}
          delay={0.12}
          className="mt-5 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.02em] text-canvas"
        />

        <Reveal delay={0.32}>
          <div className="mt-7 flex flex-wrap gap-x-10 gap-y-2 text-sm text-canvas/85">
            <span>{project.location}</span>
            <span>{project.year}</span>
            <span>{project.status}</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

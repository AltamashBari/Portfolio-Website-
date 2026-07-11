import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected architecture and interior projects by Studio Sorrel, across homes, workplaces, hospitality, and public spaces.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-40 text-canvas md:pb-28 md:pt-48">
        <Container>
          <Reveal>
            <p className="label-eyebrow text-canvas/60">Selected projects</p>
            <h1 className="mt-6 font-display text-[clamp(2.8rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.02em]">
              Work
            </h1>
            <p className="mt-7 max-w-xl leading-relaxed text-canvas/70">
              A cross-section of Altamash Bari&rsquo;s work, from a 300-bed hospital and an
              inter-state transit hub to award-winning residential and commercial towers.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-[var(--spacing-section)]">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:gap-y-24">
            {projects.map((project, i) => (
              <Reveal key={project.slug} className={i % 2 === 1 ? "sm:mt-24" : ""}>
                <ProjectCard
                  project={project}
                  aspectClass="aspect-[4/5]"
                  priority={i < 2}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

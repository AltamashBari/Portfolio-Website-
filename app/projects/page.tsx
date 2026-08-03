import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { getProjectsGroupedByYear } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected architecture and interior projects by Altamash Bari, across homes, workplaces, hospitality, and public spaces.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const groups = getProjectsGroupedByYear();

  return (
    <>
      <section className="bg-charcoal pb-20 pt-40 text-canvas md:pb-28 md:pt-48">
        <Container>
          <Reveal>
            <p className="label-eyebrow text-canvas/60">Selected works</p>
            <h1 className="mt-6 font-display text-[clamp(2.8rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.02em]">
              Work
            </h1>
            <p className="mt-7 max-w-xl leading-relaxed text-canvas/70">
              A cross-section of Altamash Bari&rsquo;s work, from a 300-bed hospital and an
              inter-state transit hub to award-winning residential towers and interior case
              studies, arranged chronologically from the most recent project back.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-canvas py-[var(--spacing-section)]">
        <Container>
          {groups.map((group, gi) => (
            <div key={group.label} className={gi > 0 ? "mt-20 md:mt-28" : ""}>
              <Reveal>
                <div className="flex items-baseline justify-between gap-6 border-b border-stone pb-5">
                  <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-medium tracking-[-0.01em] text-ink">
                    {group.label}
                  </h2>
                  <span className="label-eyebrow shrink-0 text-taupe">
                    {group.projects.length} {group.projects.length === 1 ? "Project" : "Projects"}
                  </span>
                </div>
              </Reveal>

              <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-20 lg:grid-cols-3 xl:grid-cols-4">
                {group.projects.map((project, i) => (
                  <Reveal key={project.slug} delay={(i % 4) * 0.06}>
                    <ProjectCard
                      project={project}
                      priority={gi === 0 && i === 0}
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}

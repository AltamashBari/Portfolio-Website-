import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectMeta } from "@/components/project/ProjectMeta";
import { ProjectStory } from "@/components/project/ProjectStory";
import { ProjectNav } from "@/components/project/ProjectNav";
import { getAdjacentProjects, getAllSlugs, getProject } from "@/lib/projects";
import { absoluteUrl, breadcrumbJsonLd, projectJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const url = absoluteUrl(`/projects/${project.slug}`);
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
      url,
      images: [{ url: project.cover.src, alt: project.cover.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [project.cover.src],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const adjacent = getAdjacentProjects(slug);

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd(project)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(project)) }}
      />

      <ProjectHero project={project} />

      <section className="py-[var(--spacing-section)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-snug text-ink">
                  {project.intro}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.1}>
                <ProjectMeta specs={project.specs} />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <ProjectStory project={project} />

      {adjacent && <ProjectNav prev={adjacent.prev} next={adjacent.next} />}
    </article>
  );
}

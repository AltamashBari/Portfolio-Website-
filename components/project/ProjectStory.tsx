import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import type { Project, ProjectImage, StoryBlock } from "@/lib/types";

/** A presentation sheet shown whole (uncropped) in a framed figure. */
function Sheet({ image, priority = false }: { image: ProjectImage; priority?: boolean }) {
  return (
    <Reveal>
      <figure>
        <div className="overflow-hidden rounded-[2px] border border-stone bg-elevated">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 1400px) 100vw, 1400px"
            priority={priority}
            className="h-auto w-full"
          />
        </div>
        {image.caption && <figcaption className="mt-3 text-sm text-taupe">{image.caption}</figcaption>}
      </figure>
    </Reveal>
  );
}

/**
 * Responsive image grid for a multi-image story "chapter" (an area of a
 * project with several photos, e.g. one room or zone). Wide images span
 * both columns; portrait/square images sit two-up.
 */
function AreaGrid({ images }: { images: ProjectImage[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {images.map((image, i) => {
        const wide = image.width / image.height >= 1.35;
        return (
          <Reveal key={image.src} delay={i * 0.04} className={wide ? "sm:col-span-2" : undefined}>
            <figure>
              <div className="overflow-hidden rounded-[2px] border border-stone bg-elevated">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes={wide ? "(max-width: 1400px) 100vw, 1400px" : "(max-width: 640px) 100vw, 700px"}
                  className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.015]"
                />
              </div>
              {image.caption && (
                <figcaption className="mt-3 text-sm text-taupe">{image.caption}</figcaption>
              )}
            </figure>
          </Reveal>
        );
      })}
    </div>
  );
}

function StoryText({ block }: { block: StoryBlock }) {
  return (
    <Reveal>
      <div className="mx-auto max-w-3xl">
        {block.heading && (
          <h2 className="mb-4 font-display text-3xl text-ink md:text-4xl">{block.heading}</h2>
        )}
        <p className="text-lg leading-relaxed text-brown/90">{block.body}</p>
      </div>
    </Reveal>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Sticky horizontal chip nav linking to each chapter's anchor. Only shown
 * once there are enough chapters for it to be worth the extra chrome. */
function AreaIndex({ headings }: { headings: string[] }) {
  return (
    <Reveal>
      <nav
        aria-label="Areas of this project"
        className="sticky top-[72px] z-10 -mx-6 overflow-x-auto border-b border-stone bg-canvas/95 px-6 py-4 backdrop-blur-sm md:mx-0 md:rounded-[2px] md:border md:px-6"
      >
        <ul className="flex w-max gap-2 md:w-auto md:flex-wrap">
          {headings.map((heading) => (
            <li key={heading}>
              <a
                href={`#${slugify(heading)}`}
                className="label-eyebrow inline-block whitespace-nowrap rounded-full border border-stone px-4 py-2 text-taupe transition-colors duration-300 hover:border-olive hover:text-olive"
              >
                {heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Reveal>
  );
}

/**
 * Editorial case-study body. Most blocks pair 1:1 with a gallery sheet by
 * position, as before. A block that sets `images` instead renders as a
 * multi-image "chapter" (an AreaGrid) - used to divide a project into
 * distinct areas/rooms rather than one continuous gallery. Any gallery
 * images beyond the story length are stacked at the end, unchanged from
 * the original behaviour.
 */
export function ProjectStory({ project }: { project: Project }) {
  const { story, gallery } = project;
  const remaining = gallery.slice(story.length);
  const chapterHeadings = story
    .filter((block) => block.images && block.images.length > 0 && block.heading)
    .map((block) => block.heading as string);
  const showAreaIndex = chapterHeadings.length >= 3;

  return (
    <div className="pb-[var(--spacing-section)]">
      <Container className="space-y-20 md:space-y-28">
        {showAreaIndex && <AreaIndex headings={chapterHeadings} />}

        {story.map((block, i) => {
          const hasImages = !!block.images && block.images.length > 0;
          const anchorId = hasImages && block.heading ? slugify(block.heading) : undefined;

          return (
            <div
              key={block.heading ?? i}
              id={anchorId}
              className={`space-y-14 md:space-y-20 ${anchorId ? "scroll-mt-28" : ""}`}
            >
              <StoryText block={block} />
              {hasImages ? (
                <AreaGrid images={block.images!} />
              ) : (
                gallery[i] && <Sheet image={gallery[i]} priority={i === 0} />
              )}
            </div>
          );
        })}

        {remaining.map((image) => (
          <Sheet key={image.src} image={image} />
        ))}
      </Container>
    </div>
  );
}

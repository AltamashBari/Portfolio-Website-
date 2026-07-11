import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import type { Project, ProjectImage, StoryBlock } from "@/lib/types";

/** A presentation sheet shown whole (uncropped) in a framed figure. */
function Sheet({ image, priority = false }: { image: ProjectImage; priority?: boolean }) {
  return (
    <Reveal>
      <figure>
        <div className="overflow-hidden rounded-[2px] border border-stone bg-white">
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

/**
 * Editorial case-study body: each narrative block is followed by a full-width
 * presentation sheet, with any remaining sheets stacked at the end.
 */
export function ProjectStory({ project }: { project: Project }) {
  const { story, gallery } = project;
  const remaining = gallery.slice(story.length);

  return (
    <div className="pb-[var(--spacing-section)]">
      <Container className="space-y-20 md:space-y-28">
        {story.map((block, i) => (
          <div key={block.heading ?? i} className="space-y-14 md:space-y-20">
            <StoryText block={block} />
            {gallery[i] && <Sheet image={gallery[i]} priority={i === 0} />}
          </div>
        ))}

        {remaining.map((image) => (
          <Sheet key={image.src} image={image} />
        ))}
      </Container>
    </div>
  );
}

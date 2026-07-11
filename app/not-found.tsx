import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[100dvh] items-center bg-ink text-canvas">
      <Container>
        <p className="label-eyebrow text-canvas/60">Error 404</p>
        <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.98] tracking-[-0.02em]">
          This page is still on the drawing board.
        </h1>
        <p className="mt-7 max-w-md leading-relaxed text-canvas/70">
          The page you were looking for is not here. It may have been renamed or moved.
        </p>
        <div className="mt-10">
          <Button href="/" variant="light">
            Back to home
          </Button>
        </div>
      </Container>
    </section>
  );
}

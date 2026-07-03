import Button from "@/components/ui/Button";
import ImageFrame from "@/components/ui/ImageFrame";
import FadeIn from "@/components/ui/FadeIn";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

export default function Hero() {
  const heroProject = projects[0];

  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-page gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:items-center md:px-10 md:py-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            Portfolio · 2026
          </p>
          <h1 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-ink md:text-6xl">
            Visual
            <br />
            Communication
            <br />
            Designer
          </h1>
          <p className="mt-5 text-base text-muted">{site.title}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/80">
            {site.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/work">View Selected Works</Button>
            <Button href="/resume" variant="secondary">
              Download Resume
            </Button>
            <Button href="/contact" variant="ghost">
              Contact
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <ImageFrame
            src={heroProject.cover}
            alt={`代表性作品：${heroProject.title}`}
            aspect="aspect-[3/4]"
          />
          <p className="mt-3 text-xs text-muted">
            Selected Work · {heroProject.title}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

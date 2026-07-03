import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import PageContainer from "@/components/layout/PageContainer";
import { site } from "@/data/site";

export default function ContactCta() {
  return (
    <section className="py-20 md:py-28">
      <PageContainer className="text-center">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            Let&apos;s Talk
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-medium leading-snug text-ink md:text-4xl">
            {site.contactCta}
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact">Contact Me</Button>
            <Button href="/resume" variant="secondary">
              Download Resume
            </Button>
          </div>
        </FadeIn>
      </PageContainer>
    </section>
  );
}

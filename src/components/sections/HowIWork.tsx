import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import PageContainer from "@/components/layout/PageContainer";
import { site } from "@/data/site";

export default function HowIWork() {
  return (
    <section className="border-b border-line py-16 md:py-24">
      <PageContainer>
        <SectionHeading en="How I Work" zh="工作方式" />
        <FadeIn>
          <ol className="flex flex-wrap items-center gap-y-4">
            {site.workflow.map((step, i) => (
              <li key={step} className="flex items-center">
                <span className="border border-line px-4 py-2 text-sm text-ink">
                  {step}
                </span>
                {i < site.workflow.length - 1 && (
                  <span aria-hidden className="mx-3 text-muted">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </FadeIn>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted">
          我关注的不只是单张画面，而是一个项目如何从需求理解走到最终交付。每一步的准确执行，决定了设计能否真正落地。
        </p>
      </PageContainer>
    </section>
  );
}

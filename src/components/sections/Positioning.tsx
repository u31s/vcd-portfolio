import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import PageContainer from "@/components/layout/PageContainer";
import { site } from "@/data/site";

export default function Positioning() {
  return (
    <section className="border-b border-line py-16 md:py-24">
      <PageContainer>
        <SectionHeading en="What I Bring" zh="能力定位" />
        <div className="grid gap-8 md:grid-cols-3">
          {site.positioning.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="border-t border-ink pt-5">
                <h3 className="text-lg font-medium text-ink">{item.title}</h3>
                <p className="mt-1 text-xs tracking-[0.2em] text-accent">
                  {item.zh}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

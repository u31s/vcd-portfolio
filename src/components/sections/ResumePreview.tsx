import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import PageContainer from "@/components/layout/PageContainer";
import { resume } from "@/data/resume";

export default function ResumePreview() {
  return (
    <section className="border-b border-line py-16 md:py-24">
      <PageContainer>
        <SectionHeading en="Resume" zh="简历概览" />
        <div className="grid gap-10 md:grid-cols-3">
          <FadeIn>
            <h3 className="text-xs uppercase tracking-[0.2em] text-accent">
              Education
            </h3>
            {resume.education.map((e) => (
              <div key={e.school} className="mt-4">
                <p className="text-sm font-medium text-ink">{e.school}</p>
                <p className="mt-1 text-sm text-muted">{e.major}</p>
                <p className="mt-1 text-xs text-muted">{e.period}</p>
              </div>
            ))}
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="text-xs uppercase tracking-[0.2em] text-accent">
              Internship
            </h3>
            {resume.internships.map((i) => (
              <div key={i.company} className="mt-4">
                <p className="text-sm font-medium text-ink">{i.company}</p>
                <p className="mt-1 text-sm text-muted">{i.role}</p>
                <p className="mt-1 text-xs text-muted">{i.period}</p>
              </div>
            ))}
          </FadeIn>
          <FadeIn delay={0.2}>
            <h3 className="text-xs uppercase tracking-[0.2em] text-accent">
              Core Skills
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {resume.skills
                .find((s) => s.group === "专业能力")
                ?.items.join(" · ")}
            </p>
          </FadeIn>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          {resume.downloads.map((d) => (
            <Button key={d.file} href={d.file} variant="secondary" download>
              {d.label} ↓
            </Button>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

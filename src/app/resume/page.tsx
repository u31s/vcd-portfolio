import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { resume } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "视觉传达设计应届毕业生简历：教育背景、实习经历、项目经历与专业技能。",
};

export default function ResumePage() {
  return (
    <PageContainer className="py-16 md:py-24">
      <FadeIn>
        <p className="text-xs uppercase tracking-[0.25em] text-accent">
          Resume
        </p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-5xl">
          简历
        </h1>
        <p className="mt-4 text-sm text-muted">求职方向：{resume.direction}</p>
      </FadeIn>

      <div className="mt-10 flex flex-wrap gap-4">
        {resume.downloads.map((d) => (
          <Button key={d.file} href={d.file} download>
            {d.label} ↓
          </Button>
        ))}
      </div>

      <section className="mt-20 border-t border-line pt-16">
        <SectionHeading en="Education" zh="教育背景" />
        {resume.education.map((e) => (
          <div key={e.school} className="flex flex-wrap justify-between gap-2">
            <div>
              <p className="text-base font-medium text-ink">{e.school}</p>
              <p className="mt-1 text-sm text-muted">{e.major}</p>
            </div>
            <p className="text-sm text-muted">{e.period}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 border-t border-line pt-16">
        <SectionHeading en="Internship" zh="实习经历" />
        {resume.internships.map((i) => (
          <div key={i.company}>
            <div className="flex flex-wrap justify-between gap-2">
              <div>
                <p className="text-base font-medium text-ink">{i.company}</p>
                <p className="mt-1 text-sm text-muted">{i.role}</p>
              </div>
              <p className="text-sm text-muted">{i.period}</p>
            </div>
            <ul className="mt-4 space-y-2">
              {i.points.map((p) => (
                <li key={p} className="text-sm leading-relaxed text-ink/80">
                  — {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-16 border-t border-line pt-16">
        <SectionHeading en="Projects" zh="项目经历" />
        <ul className="space-y-4">
          {resume.projects.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/work/${p.slug}`}
                className="group inline-flex items-center gap-3 text-sm text-ink transition-colors hover:text-accent"
              >
                {p.name}
                <span className="text-xs text-muted group-hover:text-accent">
                  View Case →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-line pt-16">
        <SectionHeading en="Skills" zh="专业技能" />
        <div className="grid gap-8 sm:grid-cols-2">
          {resume.skills.map((s) => (
            <div key={s.group}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-accent">
                {s.group}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">
                {s.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}

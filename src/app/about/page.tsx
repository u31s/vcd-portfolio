import type { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import ImageFrame from "@/components/ui/ImageFrame";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "视觉传达设计应届毕业生，项目经历涵盖老字号品牌视觉升级、包装设计落地、城市文化 IP 文创设计。",
};

const strengths = [
  "具备视觉表达和版式设计基础",
  "理解品牌视觉规范和包装落地流程",
  "具备客户反馈修改和项目节点配合经验",
  "有文件整理、版本管理和交付意识",
  "愿意学习 AI 工具，提高设计与提案效率",
];

const method = [
  "Brief",
  "Research",
  "Visual Direction",
  "Design Output",
  "Feedback",
  "Delivery",
];

export default function AboutPage() {
  return (
    <PageContainer className="py-16 md:py-24">
      <div className="grid gap-14 md:grid-cols-[1.3fr_1fr]">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            About
          </p>
          <h1 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-5xl">
            你好，我是一名视觉传达设计应届毕业生。
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80">
            我的项目经历涵盖老字号品牌视觉升级、包装设计落地、城市文化 IP
            文创设计及私人视觉定制。我关注的不只是画面本身，还有一个项目如何被理解、被推进、被交付。
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <ImageFrame
            src="/images/about-portrait.jpg"
            alt="个人照片（此处替换为真实照片）"
            aspect="aspect-[3/4]"
          />
        </FadeIn>
      </div>

      <section className="mt-20 border-t border-line pt-16">
        <SectionHeading en="Career Direction" zh="职业方向" />
        <p className="max-w-2xl text-sm leading-relaxed text-ink/80">
          我希望从品牌执行、市场助理、包装设计助理、广告项目执行等岗位开始，结合视觉传达专业背景，参与品牌与市场项目从概念到落地的完整过程。
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {site.targetRoles.map((r) => (
            <span
              key={r}
              className="border border-line px-3 py-1 text-xs text-muted"
            >
              {r}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-line pt-16">
        <SectionHeading en="My Strengths" zh="我的优势" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {strengths.map((s) => (
            <li
              key={s}
              className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink/80"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 border-t border-line pt-16">
        <SectionHeading en="How I Approach a Project" zh="工作方法" />
        <ol className="flex flex-wrap items-center gap-y-4">
          {method.map((step, i) => (
            <li key={step} className="flex items-center">
              <span className="border border-line px-4 py-2 text-sm text-ink">
                {step}
              </span>
              {i < method.length - 1 && (
                <span aria-hidden className="mx-3 text-muted">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <Button href="/work">View My Works</Button>
        </div>
      </section>
    </PageContainer>
  );
}

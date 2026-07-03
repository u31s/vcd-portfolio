import type { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import ImageFrame from "@/components/ui/ImageFrame";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "联系方式：品牌、市场、包装、视觉设计与项目执行方向的求职机会均欢迎联系。",
};

export default function ContactPage() {
  return (
    <PageContainer className="py-16 md:py-24">
      <div className="grid gap-14 md:grid-cols-[1.3fr_1fr]">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            Contact
          </p>
          <h1 className="mt-4 max-w-xl text-3xl font-medium leading-snug tracking-tight text-ink md:text-4xl">
            {site.contactStatement}
          </h1>

          <dl className="mt-12 space-y-6">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="text-lg text-ink transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                Phone
              </dt>
              <dd className="mt-1 text-lg text-ink">{site.phone}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                Social
              </dt>
              <dd className="mt-2 flex flex-wrap gap-5">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink underline underline-offset-4 transition-colors hover:text-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-12">
            <Button href={site.portfolioPdf} download>
              下载完整作品集 PDF ↓
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-[240px]">
            <ImageFrame
              src={site.wechatQr}
              alt="微信二维码（此处替换为真实二维码图片）"
              aspect="aspect-square"
            />
            <p className="mt-3 text-xs text-muted">
              WeChat · 扫码添加（此处替换为真实微信二维码）
            </p>
          </div>
        </FadeIn>
      </div>
    </PageContainer>
  );
}

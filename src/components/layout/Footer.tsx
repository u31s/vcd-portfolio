import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-sm text-ink">{site.nameEn}</p>
          <p className="mt-1 text-xs text-muted">{site.contactCta}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-wide text-muted transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="text-xs tracking-wide text-muted transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

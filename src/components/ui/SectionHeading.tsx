interface SectionHeadingProps {
  en: string;
  zh?: string;
}

export default function SectionHeading({ en, zh }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-accent">
        {zh}
      </p>
      <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
        {en}
      </h2>
    </div>
  );
}

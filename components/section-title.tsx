type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{subtitle}</p>
    </div>
  );
}

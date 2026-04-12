type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className="section-heading-shell space-y-4">
      <span className={`eyebrow ${invert ? "accent-pill" : ""}`}>{eyebrow}</span>
      <div className="space-y-3">
        <h2 className="text-main font-display text-[2.15rem] leading-[0.96] sm:text-[2.6rem] lg:text-[3rem] xl:max-w-[18ch]">
          {title}
        </h2>
        <p className="text-soft max-w-3xl text-[0.98rem] leading-7 sm:text-[1.04rem] sm:leading-8">
          {description}
        </p>
      </div>
    </div>
  );
}

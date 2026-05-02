type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: Props) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p
          className={`mb-4 text-xs uppercase tracking-[0.35em] ${
            light ? "text-gold-light" : "text-gold"
          }`}
        >
          <span className="mr-3 inline-block h-px w-6 align-middle bg-current" />
          {eyebrow}
          <span className="ml-3 inline-block h-px w-6 align-middle bg-current" />
        </p>
      )}
      <h2
        className={`font-serif text-3xl leading-tight md:text-5xl ${
          light ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            light ? "text-cream/70" : "text-mocha/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

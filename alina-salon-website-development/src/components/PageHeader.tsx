type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-espresso pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(212,181,130,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(232,220,200,0.3), transparent 40%)",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-10">
        {eyebrow && (
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-gold-light">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-gold-light" />
            {eyebrow}
            <span className="ml-3 inline-block h-px w-8 align-middle bg-gold-light" />
          </p>
        )}
        <h1 className="font-serif text-5xl leading-[1.05] text-cream md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/70 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

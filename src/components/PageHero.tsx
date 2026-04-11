export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/8 via-bg-primary to-accent-green/5" />
      <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent-purple/5 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <span className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
          {eyebrow}
        </span>
        <h1 className="mt-3 font-serif text-4xl text-text-heading md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

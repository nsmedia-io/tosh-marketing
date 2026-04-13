export default function MidCta({
  heading,
  sub,
  label,
  href,
}: {
  heading: string;
  sub: string;
  label: string;
  href: string;
}) {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 via-bg-primary to-accent-green/5" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h3 className="font-serif text-3xl text-text-heading md:text-4xl">
          {heading}
        </h3>
        <p className="mt-4 text-text-secondary">{sub}</p>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="mt-8 inline-block rounded-full bg-accent-green px-8 py-3.5 text-xs font-semibold tracking-[0.15em] text-text-heading transition-all hover:shadow-[0_0_20px_rgba(45,106,79,0.3)]"
        >
          {label}
        </a>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden">
      {/* Background gradient with purple/green sweep */}
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-bg-primary to-accent-green/8" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-purple/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent-green/5 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-serif text-5xl leading-tight font-light text-text-heading md:text-7xl lg:text-8xl">
          Educate.
          <br />
          Empower.
          <br />
          <span className="italic">Unapologize.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
          Life coaching & consulting for the bold, the curious, and the
          unapologetically authentic.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#booking"
            className="rounded-full bg-accent-green px-8 py-3.5 text-sm font-semibold tracking-[0.15em] text-bg-primary transition-all hover:shadow-[0_0_30px_rgba(0,200,83,0.3)]"
          >
            BOOK A FREE CALL
          </a>
          <a
            href="#about"
            className="rounded-full border border-text-secondary/30 px-8 py-3.5 text-sm font-semibold tracking-[0.15em] text-text-primary transition-all hover:border-accent-purple hover:text-accent-purple"
          >
            LEARN MORE
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-text-secondary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
}

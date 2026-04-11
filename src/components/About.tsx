export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      {/* Subtle background glow */}
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent-green/5 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Left side */}
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
            DISCOVER
          </span>
          <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl lg:text-6xl">
            About Me
          </h2>
          <a
            href="#booking"
            className="mt-8 inline-block w-fit rounded-full bg-accent-green px-8 py-3 text-xs font-semibold tracking-[0.15em] text-bg-primary transition-all hover:shadow-[0_0_20px_rgba(0,200,83,0.3)]"
          >
            KNOW MORE
          </a>
        </div>

        {/* Right side — bio text */}
        <div className="flex flex-col justify-center gap-6">
          <p className="text-lg leading-relaxed text-text-secondary">
            I'm a life coach, educator, and consultant who believes that
            self-knowledge is the ultimate power move. With over a decade of
            experience guiding people through their most vulnerable and
            transformative moments, I bring equal parts strategy, sass, and heart
            to everything I do.
          </p>
          <p className="text-lg leading-relaxed text-text-secondary">
            My approach blends practical coaching frameworks with an
            unapologetic celebration of who you really are. No judgment. No
            scripts. Just real talk and real results.
          </p>
          <p className="text-lg leading-relaxed text-text-secondary">
            I'm a creator, an educator, a visionary. My work lives at the
            intersection of empowerment, authenticity, and rebellion. This is
            where performance ends and truth begins.
          </p>
        </div>
      </div>

      {/* Placeholder portrait area */}
      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="flex h-80 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-purple/10 via-bg-secondary to-accent-green/10 md:h-96">
          <div className="text-center">
            <svg className="mx-auto h-16 w-16 text-text-secondary/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
            </svg>
            <p className="mt-4 text-sm text-text-secondary/40">Portrait photo placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}

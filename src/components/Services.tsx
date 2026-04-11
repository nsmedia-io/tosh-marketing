const COACHING = [
  {
    title: "1:1 Life Coaching",
    desc: "Personalized sessions tailored to your goals. Strategic, sassy, and deeply supportive.",
  },
  {
    title: "Intensive Breakthrough Sessions",
    desc: "90-minute deep dives for when you need clarity fast.",
  },
  {
    title: "Group Coaching & Workshops",
    desc: "Community-powered growth with structured guidance and accountability.",
  },
  {
    title: "Relationship & Communication Coaching",
    desc: "Personalized guidance in communication, boundaries, and holistic identity.",
  },
];

const CONSULTING = [
  {
    title: "Brand & Business Consulting",
    desc: "Strategy, positioning, and messaging for coaches and creators.",
  },
  {
    title: "Speaking & Education",
    desc: "Engaging talks on empowerment, boundaries, and authentic leadership.",
  },
  {
    title: "VIP Day Experience",
    desc: "A full day dedicated to mapping your vision and building your action plan.",
  },
  {
    title: "Workshops & Events",
    desc: "Education rooted in lived experience, precision, and unapologetic power.",
  },
];

function Arrow() {
  return (
    <svg className="h-5 w-5 shrink-0 text-accent-green transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function ServiceItem({ title, desc }: { title: string; desc: string }) {
  return (
    <a href="#booking" className="group block border-b border-divider py-5 transition-colors hover:border-accent-purple/30">
      <div className="flex items-center justify-between gap-4">
        <h4 className="font-serif text-lg text-text-heading transition-colors group-hover:text-accent-purple md:text-xl">
          {title}
        </h4>
        <Arrow />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{desc}</p>
    </a>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Placeholder image */}
          <div className="flex h-72 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-purple/10 via-bg-secondary to-accent-green/10 md:h-96">
            <div className="text-center">
              <svg className="mx-auto h-16 w-16 text-text-secondary/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
              <p className="mt-4 text-sm text-text-secondary/40">Photo placeholder</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-[0.3em] text-accent-green">
              WHAT I OFFER
            </span>
            <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl lg:text-6xl">
              Choose Your Path
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              I offer a range of coaching and consulting services designed to
              meet you exactly where you are. Whether you're exploring, growing,
              or ready to transform — there's a path for you.
            </p>
          </div>
        </div>

        {/* Service grid */}
        <div className="mt-20 grid gap-x-16 gap-y-0 md:grid-cols-2">
          {/* Left column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.3em] text-accent-purple">
              COACHING SERVICES
            </h3>
            {COACHING.map((s) => (
              <ServiceItem key={s.title} {...s} />
            ))}
          </div>

          {/* Right column */}
          <div className="mt-12 md:mt-0">
            <h3 className="mb-4 text-xs font-semibold tracking-[0.3em] text-accent-green">
              CONSULTING SERVICES
            </h3>
            {CONSULTING.map((s) => (
              <ServiceItem key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

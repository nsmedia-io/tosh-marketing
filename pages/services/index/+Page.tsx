import PageHero from "@/components/PageHero";
import Divider from "@/components/Divider";
import PhotoGallery from "@/components/PhotoGallery";
import MidCta from "@/components/MidCta";
import { siteConfig } from "@/site.config";
import { services } from "@/images.config";

function ServiceCards() {
  const cards = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
        </svg>
      ),
      title: "Classes & Workshops",
      desc: "Judgment-free, no-nonsense education for people who want real answers. From kink fundamentals to relationship strategy to self-discovery, I run immersive workshops online and in-person.",
      href: "/services/workshops",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ),
      title: "Private Coaching",
      desc: "Personalized guidance built around your goals. Whether you're untangling relationship patterns, stepping into power dynamics, or scaling your career, I bring sharp strategy and genuine care to every session.",
      href: "/services/coaching",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
        </svg>
      ),
      title: "Speaking & Keynotes",
      desc: "Real stories, sharp analysis, and zero sugarcoating. Keynotes, panels, and consulting engagements that confront stigma head-on and center the perspectives that mainstream spaces keep ignoring.",
      href: "/services/speaking",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group rounded-2xl border border-divider bg-bg-secondary p-8 transition-all hover:border-accent-purple/30 hover:shadow-[0_0_30px_rgba(155,48,255,0.05)]"
            >
              <div className="text-accent-purple">{c.icon}</div>
              <h3 className="mt-4 font-serif text-xl text-text-heading transition-colors group-hover:text-accent-purple">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {c.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] text-accent-green">
                LEARN MORE
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="CLASSES & COACHING"
        title="Built on What I've Lived, Not What I've Read"
        subtitle="I see education as a catalyst for real change. Consent as something you practice, not just preach. Connection as the foundation everything else is built on. My curriculum comes from years in the trenches, not a syllabus."
      />

      <ServiceCards />

      <PhotoGallery
        images={[
          { label: "Workshop", src: services.overview[0] },
          { label: "Coaching", src: services.overview[1] },
          { label: "Speaking", src: services.overview[2] },
          { label: "Teaching", src: services.overview[3] },
          { label: "Events", src: services.overview[4] },
        ]}
      />

      <Divider />

      <MidCta
        heading="Not Sure Where to Start?"
        sub="Book a free discovery call. We'll figure out the right path together."
        label="SCHEDULE YOUR CALL"
        href={siteConfig.acuityUrl}
      />
    </>
  );
}

import PageHero from "@/components/PageHero";
import Divider from "@/components/Divider";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import MidCta from "@/components/MidCta";
import { services } from "@/images.config";

export default function Page() {
  const keynotes = [
    {
      title: "Reclaiming Dangerous Womanhood",
      desc: "An exploration of femme power, fear-based control, and what it means to thrive unapologetically at the intersection of sexual agency and societal expectation.",
    },
    {
      title: "Stigma is a System",
      desc: "A piercing look at how stigma operates as a mechanism of control, and how we dismantle it through storytelling, solidarity, and systemic change.",
    },
    {
      title: "Building Power at the Margins",
      desc: "A roadmap to authentic leadership in communities that have been pushed aside, drawn from years of community organizing and creative entrepreneurship.",
    },
    {
      title: "Consent as Creative Power",
      desc: "Moving beyond checklists to consent as a living practice. How intentional negotiation becomes a tool for deeper connection, better art, and more honest relationships.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="PUBLIC SPEAKING & KEYNOTES"
        title="Direct. Unfiltered. Impossible to Ignore."
        subtitle="From kink conventions to wellness retreats to private corporate events, I speak with equal parts depth and precision on subjects that others are afraid to touch."
      />

      <Divider />

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            <ImagePlaceholder
              label="Speaking photo"
              aspect="aspect-[4/5]"
              src={services.speaking.hero}
            />
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-accent-green">
                ON STAGE & ON PANELS
              </span>
              <h2 className="mt-3 font-serif text-3xl text-text-heading md:text-4xl">
                Shaped by Experience, Not Just Opinions
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-text-secondary">
                <p>
                  My voice isn't just informed by lived experience. It's shaped by
                  years of leadership, community-building, and unflinching
                  confrontation of taboo. Whether I'm on a panel, headlining a
                  keynote, or leading a workshop, I bring the same intention: to
                  make people feel seen, challenged, and transformed.
                </p>
                <p>
                  I speak on topics spanning kink, consent, gender,
                  neurodivergence, entrepreneurship, and social equity, always
                  grounded in intersectionality and real-world application.
                </p>
              </div>

              {/* Panel topics */}
              <div className="mt-8">
                <h4 className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
                  PANEL TOPICS
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Power & Kink Culture",
                    "Consent & Communication",
                    "Sex Work & Advocacy",
                    "Identity & Liberation",
                    "Creator Autonomy",
                    "Community Building",
                    "Safer Spaces",
                    "Digital Culture",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-divider px-4 py-1.5 text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="/contact"
                className="mt-8 inline-block rounded-full border border-accent-green px-8 py-3 text-xs font-semibold tracking-[0.15em] text-accent-green transition-all hover:bg-accent-green hover:text-text-heading"
              >
                EMAIL TO INQUIRE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Keynotes */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-center font-serif text-2xl text-text-heading md:text-3xl">
            Signature Keynotes
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-text-secondary">
            Presentations can be tailored to suit your audience, whether it's a
            festival, nonprofit, brand campaign, or private event.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {keynotes.map((k) => (
              <div
                key={k.title}
                className="rounded-2xl border border-divider bg-bg-secondary p-8"
              >
                <h4 className="font-serif text-xl text-text-heading">
                  "{k.title}"
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {k.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-divider bg-bg-secondary p-8 md:p-12">
            <h3 className="text-center font-serif text-2xl text-text-heading">
              Credentials & Experience
            </h3>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Professional Dominatrix & educator with years of lived experience",
                "Workshops and classes taught to hundreds of attendees",
                "Coaching and consulting for independent creators and entrepreneurs",
                "Sex worker advocate and community organizer",
                "Keynote speaker at conventions, retreats, and private events",
                "Curriculum spanning kink, consent, business strategy, and empowerment",
              ].map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-sm text-text-secondary">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <MidCta
        heading="Interested in Booking Me?"
        sub="Keynotes, panels, guest lectures, and workshops. Let's talk."
        label="GET IN TOUCH"
        href="/contact"
      />
    </>
  );
}

import PageHero from "@/components/PageHero";
import Divider from "@/components/Divider";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PhotoGallery from "@/components/PhotoGallery";
import { siteConfig } from "@/site.config";
import { portraits, gallery } from "@/images.config";

/* ─── Three service overview cards ─── */

function ServiceCards() {
  const cards = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
        </svg>
      ),
      title: "Classes & Workshops",
      desc: "Dynamic, stigma-free education for those hungry to learn. From kink skills to relationship strategy to radical self-knowledge, I teach immersive workshops online and in-person.",
      anchor: "#workshops",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ),
      title: "Private Coaching",
      desc: "1:1 support tailored to your journey. Whether you're navigating relationships, exploring power dynamics, or leveling up your career, my coaching combines practical insight with fierce empathy.",
      anchor: "#coaching",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
        </svg>
      ),
      title: "Speaking & Keynotes",
      desc: "Authentic storytelling meets informed disruption. Keynotes, panels, and consulting that challenge stigma, ignite change, and amplify voices too often left unheard.",
      anchor: "#speaking",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.anchor}
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 13.5-7.5 7.5m0 0-7.5-7.5m7.5 7.5V3" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Topic list component ─── */

function TopicList({
  title,
  topics,
  color = "purple",
}: {
  title: string;
  topics: string[];
  color?: "purple" | "green";
}) {
  const accentClass = color === "green" ? "text-accent-green" : "text-accent-purple";
  return (
    <div>
      <h4 className={`text-xs font-semibold tracking-[0.3em] ${accentClass}`}>
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {topics.map((t) => (
          <li key={t} className="flex items-start gap-3 text-sm text-text-secondary">
            <span className={`mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full ${color === "green" ? "bg-accent-green" : "bg-accent-purple"}`} />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Pricing tier component ─── */

function PricingTier({
  name,
  price,
  detail,
  desc,
}: {
  name: string;
  price: string;
  detail: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-divider bg-bg-primary p-6">
      <h4 className="font-serif text-lg text-text-heading">{name}</h4>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="font-serif text-2xl text-accent-green">{price}</span>
        <span className="text-xs text-text-secondary">{detail}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{desc}</p>
    </div>
  );
}

/* ─── SECTION 1: Classes & Workshops ─── */

function WorkshopsSection() {
  return (
    <section id="workshops" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
              CLASSES & WORKSHOPS
            </span>
            <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
              Radically Honest.
              <br />
              <span className="italic">Fiercely Educational.</span>
            </h2>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-text-secondary">
              <p>
                I don't just teach. I make concepts accessible and approachable.
                I create spaces where people feel safe enough to ask real
                questions, examine their assumptions, and step into new versions
                of themselves.
              </p>
              <p>
                My workshops blend evidence-based tools with lived wisdom,
                delivered with clarity, candor, and just enough bite to keep it
                interesting. Your liberation begins with understanding.
              </p>
            </div>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-full bg-accent-green px-8 py-3 text-xs font-semibold tracking-[0.15em] text-bg-primary transition-all hover:shadow-[0_0_20px_rgba(0,200,83,0.3)]"
            >
              INQUIRE ABOUT CLASSES
            </a>
          </div>
          <ImagePlaceholder
            label="Workshop photo"
            aspect="aspect-[4/5]"
            src={portraits.speaking}
          />
        </div>

        {/* Topic grid */}
        <div className="mt-24">
          <h3 className="text-center font-serif text-2xl text-text-heading md:text-3xl">
            A Taste of What I Teach
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-text-secondary">
            Available to teach in-person and virtually for groups and
            organizations. This is just a sample of my curriculum.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <TopicList
              title="KINK, BDSM & RELATIONSHIPS"
              topics={[
                "The Psychology of Restraint: why we crave it and what it teaches us",
                "Emotional Safety in Edge Play: trust-building and aftercare",
                "The Art of Tease & Denial: neuropsychology meets seduction",
                "Power Exchange 101: building D/s dynamics with emotional intelligence",
                "Consent as Creative Power: negotiation frameworks that actually work",
                "Navigating Jealousy, Insecurity & Mismatched Desire",
              ]}
            />
            <TopicList
              title="ADVOCACY & ETHICS"
              color="green"
              topics={[
                "Online Censorship & the War on Sex Workers: what you need to know",
                "Survivor-Led Advocacy in Alternative Spaces",
                "Why Decriminalization Matters: a policy, public health, and human rights lens",
                "Peer Support & Harm Reduction Models: community-based care",
                "The Myth of Respectability: power, politics, and the policing of desire",
                "When the Law Isn't On Our Side: navigating criminalization and stigma",
              ]}
            />
            <TopicList
              title="BUSINESS & CONTENT CREATION"
              topics={[
                "Building a Content Empire That's Actually Yours",
                "Recession-Proof Your Hustle: protecting your income when everything shifts",
                "Branding, Pricing & Positioning for Independent Professionals",
                "Your Brand Is Not Your Worth: navigating visibility and parasociality",
                "Content Strategy for the Long Game: working with burnout and limitations",
                "Automation, Systems & Scaling Without Selling Your Soul",
              ]}
            />
            <TopicList
              title="SAFETY & MENTAL HEALTH"
              color="green"
              topics={[
                "Joy as Resistance: building spaces centered in play, power, and possibility",
                "Performing vs. Living Identity: expression, authenticity, and the gaze",
                "Neurodivergent Navigation in Kink & Play",
                "From Policy to Practice: training staff for inclusive environments",
                "Burnout is Not a Badge: rest, recovery, and sustainable creative practice",
                "Boundaries as Self-Preservation: the art of the unapologetic no",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Mid-page CTA ─── */

function MidCta({
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
          className="mt-8 inline-block rounded-full bg-accent-green px-8 py-3.5 text-xs font-semibold tracking-[0.15em] text-bg-primary transition-all hover:shadow-[0_0_20px_rgba(0,200,83,0.3)]"
        >
          {label}
        </a>
      </div>
    </section>
  );
}

/* ─── SECTION 2: Private Coaching ─── */

function CoachingSection() {
  return (
    <section id="coaching" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Relationship & Kink Coaching */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <ImagePlaceholder
            label="Coaching photo"
            aspect="aspect-[4/5]"
            src={portraits.coaching}
          />
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-accent-green">
              1:1 COACHING
            </span>
            <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
              Relationship & Life Coaching
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Navigate intimacy, desire, power, and communication with clarity
              and confidence. Tailored support for individuals, couples, or
              polycules seeking to deepen trust, negotiate dynamics, or explore
              safely and authentically.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Developing consent frameworks that actually work",
                "Building D/s dynamics with emotional intelligence",
                "Kink discovery, play negotiation, and aftercare",
                "Navigating jealousy, insecurity, or mismatched desire",
                "Power exchange and relationship repair",
                "Boundary setting and radical self-advocacy",
                "Supporting neurodivergent partners and systems",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-text-secondary">
                  <svg className="mt-1 h-4 w-4 shrink-0 text-accent-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Coaching Pricing */}
        <div className="mt-20">
          <h3 className="text-center font-serif text-2xl text-text-heading md:text-3xl">
            Coaching Investment
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-text-secondary">
            In-person and virtual options available. Due to the nature of my
            schedule, I can only take a limited number of coaching clients at a
            time.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <PricingTier
              name="Discovery Call"
              price="Free"
              detail="30 mins"
              desc="A no-pressure conversation to see if we're a good fit and map out what coaching could look like for you."
            />
            <PricingTier
              name="Initial Consultation"
              price="$250"
              detail="90 mins"
              desc="A deep-dive assessment to understand where you are, where you want to go, and plot a course for your journey."
            />
            <PricingTier
              name="Ongoing Coaching"
              price="$175+"
              detail="per hour"
              desc="Regular sessions tailored to your goals. Price reflects the nature of coaching needed. Virtual and in-person options."
            />
            <PricingTier
              name="Check-in Calls"
              price="$100"
              detail="30 mins"
              desc="Quick phone or Zoom check-ins for accountability, troubleshooting, and keeping momentum between full sessions."
            />
          </div>
          <div className="mt-8 text-center">
            <a
              href={siteConfig.acuityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-accent-green px-8 py-3 text-xs font-semibold tracking-[0.15em] text-bg-primary transition-all hover:shadow-[0_0_20px_rgba(0,200,83,0.3)]"
            >
              BOOK YOUR CONSULTATION
            </a>
          </div>
        </div>

        {/* Business / SxW Coaching */}
        <div className="mt-32 grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
              BUSINESS COACHING
            </span>
            <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
              Business & Career Consulting
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Honest, practical support from someone who's lived it. For content
              creators, independent professionals, and entrepreneurs ready to
              level up their business, protect their energy, or realign with
              their purpose.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Pricing, positioning, and platform diversification",
                "Brand audits and creative vision development",
                "Time management, burnout prevention, and scaling up",
                "Boundaries, parasocial dynamics, and emotional labor",
                "Marketing strategy across social, email, and niche platforms",
                "Financial planning, taxes, and long-term strategy",
                "Hiring help: assistants, editors, or collaborators",
                "Navigating online censorship and deplatforming",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-text-secondary">
                  <svg className="mt-1 h-4 w-4 shrink-0 text-accent-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <ImagePlaceholder
            label="Business coaching"
            aspect="aspect-[4/5]"
            src={portraits.vip}
          />
        </div>

        {/* Business coaching pricing */}
        <div className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <PricingTier
              name="Initial Consultation"
              price="$150"
              detail="90 mins"
              desc="An online or in-person assessment of your business, brand, and goals. We identify your biggest leverage points."
            />
            <PricingTier
              name="Brand Audit"
              price="$250"
              detail="full review"
              desc="You share all your links and platforms. I do a deep-dive analysis of your brand, offerings, marketing, and positioning."
            />
            <PricingTier
              name="Ongoing Coaching"
              price="$150+"
              detail="per hour"
              desc="Subsequent sessions. Virtual and in-person options available. Price reflects the nature of coaching needed."
            />
            <PricingTier
              name="Check-in Calls"
              price="$100"
              detail="30 mins"
              desc="Accountability check-ins done via phone or Zoom. Stay on track with the changes you're making."
            />
          </div>
          <div className="mt-8 text-center">
            <a
              href={siteConfig.acuityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-accent-green px-8 py-3 text-xs font-semibold tracking-[0.15em] text-bg-primary transition-all hover:shadow-[0_0_20px_rgba(0,200,83,0.3)]"
            >
              BOOK YOUR CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: Speaking & Keynotes ─── */

function SpeakingSection() {
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
    <section id="speaking" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <ImagePlaceholder
            label="Speaking photo"
            aspect="aspect-[4/5]"
            src={portraits.about1}
          />
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-accent-green">
              PUBLIC SPEAKING & KEYNOTES
            </span>
            <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
              Honest. Unapologetic.
              <br />
              <span className="italic">Unforgettable.</span>
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-text-secondary">
              <p>
                From kink conventions to wellness retreats to private corporate
                events, I speak with equal parts depth and precision on subjects
                that others are afraid to touch.
              </p>
              <p>
                My voice isn't just informed by lived experience. It's shaped by
                years of leadership, community-building, and unflinching
                confrontation of taboo. Whether I'm on a panel, headlining a
                keynote, or leading a workshop, I bring the same intention: to
                make people feel seen, challenged, and transformed.
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
              className="mt-8 inline-block rounded-full border border-accent-green px-8 py-3 text-xs font-semibold tracking-[0.15em] text-accent-green transition-all hover:bg-accent-green hover:text-bg-primary"
            >
              EMAIL TO INQUIRE
            </a>
          </div>
        </div>

        {/* Signature Keynotes */}
        <div className="mt-24">
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

        {/* Credentials */}
        <div className="mt-20 rounded-2xl border border-divider bg-bg-secondary p-8 md:p-12">
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
  );
}

/* ─── Bottom CTA ─── */

function BottomCta() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-accent-purple/5 to-bg-primary" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-green/5 blur-[150px]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-4xl text-text-heading md:text-5xl">
          Not Sure Where to Start?
        </h2>
        <p className="mt-6 text-lg text-text-secondary">
          Book a free discovery call. No pressure, no scripts. We'll figure out
          the right path together.
        </p>
        <a
          href={siteConfig.acuityUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-accent-green px-10 py-4 text-sm font-semibold tracking-[0.15em] text-bg-primary transition-all hover:shadow-[0_0_30px_rgba(0,200,83,0.3)]"
        >
          SCHEDULE YOUR CALL
        </a>
      </div>
    </section>
  );
}

/* ─── Page ─── */

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="CLASSES & COACHING"
        title="Teaching From the Edge of Experience"
        subtitle="I believe in education as transformation, in consent as creative power, and in our ability to change the world through intimacy, integrity, and connection. I don't just teach from theory. I teach from the battlefield."
      />

      <ServiceCards />

      <PhotoGallery
        images={[
          { label: "Workshop", src: gallery.g1 },
          { label: "Coaching", src: gallery.g2 },
          { label: "Speaking", src: gallery.g3 },
          { label: "Teaching", src: gallery.g4 },
          { label: "Events", src: gallery.g5 },
        ]}
      />

      <Divider />
      <WorkshopsSection />

      <MidCta
        heading="Looking to Make an Appointment?"
        sub="Sessions, coaching, consults, and more."
        label="BOOK AN APPOINTMENT"
        href={siteConfig.acuityUrl}
      />

      <Divider />
      <CoachingSection />

      <Divider />
      <SpeakingSection />

      <Divider />
      <BottomCta />
    </>
  );
}

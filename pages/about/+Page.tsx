import PageHero from "@/components/PageHero";
import Divider from "@/components/Divider";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PhotoGallery from "@/components/PhotoGallery";
import { about } from "@/images.config";

function Stats() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Clients Served" },
    { value: "5K+", label: "Hours of Sessions" },
  ];
  return (
    <div className="mt-12 flex flex-wrap gap-12">
      {stats.map((s) => (
        <div key={s.label}>
          <span className="font-serif text-3xl text-accent-green md:text-4xl">
            {s.value}
          </span>
          <p className="mt-1 text-xs font-medium tracking-[0.2em] text-text-secondary">
            {s.label.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
}

function ProfessionalIdentity() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-16 lg:gap-24">
        <ImagePlaceholder label="Professional portrait" aspect="aspect-[3/4]" src={about.portrait} />
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
            WHO I AM
          </span>
          <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
            A Way of Life
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Domination isn't something I step into, it's my way of life. I find
            profound fulfillment in guiding others as they explore their
            deepest, most intimate fantasies.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            With care and intention, I take pride in helping submissives safely
            expand their boundaries and discover new depths of headspace and
            self-awareness.
          </p>
          <Stats />
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-accent-green">
              WHAT FASCINATES ME
            </span>
            <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
              Drawn to the Strange and Unconventional
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                I've always been drawn to the strange and unconventional. Places
                like the Mütter Museum and immersive science exhibits have long
                captured my curiosity.
              </p>
              <p>
                My academic background centers on science, psychology, and crime
                scene analysis — fields I continue to explore and deepen my
                understanding of.
              </p>
              <p>
                I'm particularly fascinated by the psychology of fetishes: what
                drives a fixation, how the mind forms these connections, and the
                subtle triggers that bring them to life. Unraveling those layers
                is endlessly intriguing to me.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <ImagePlaceholder label="Session photo" aspect="aspect-[4/5]" src={about.session} />
            <ImagePlaceholder label="Teaching photo" aspect="aspect-[4/3]" src={about.teaching} />
          </div>
        </div>
      </div>
    </section>
  );
}

function MidPageCta() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 via-bg-primary to-accent-green/5" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h3 className="font-serif text-3xl text-text-heading md:text-4xl">
          Ready to Explore?
        </h3>
        <p className="mt-4 text-text-secondary">
          Open communication. Mutual chemistry. Real connection.
        </p>
        <a
          href="/booking"
          className="mt-8 inline-block rounded-full bg-accent-green px-8 py-3.5 text-xs font-semibold tracking-[0.15em] text-text-heading transition-all hover:shadow-[0_0_20px_rgba(45,106,79,0.3)]"
        >
          BOOK AN APPOINTMENT
        </a>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
              HOW I WORK
            </span>
            <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
              Direct, Curious, Unapologetic
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                I thrive on energy, clarity, and direct communication. As a
                Dominant, I'm deeply passionate about fostering personal growth,
                creating meaningful connections, and elevating expectations.
              </p>
              <p>
                I hold a genuine appreciation for BDSM and kink in every form:
                from the most vanilla desires to the truly wild and unique. I
                actively seek out unique experiences and new adventures, always
                eager to explore whatever excites you.
              </p>
              <p>
                If you can communicate your needs openly and honestly, I'm
                confident we'll connect beautifully, whether your desires feel
                ordinary or deliciously bizarre.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <ImagePlaceholder label="Artistic portrait" aspect="aspect-square" src={about.artistic} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreSpecialties() {
  const items = [
    "Medical",
    "Impact scenes",
    "Corporal punishment (OTK, spanking, paddling, caning)",
    "Humiliation play",
    "CBT / ballbusting and kicking",
    "Bisexual and homosexual fantasy play",
    "Slave training",
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-green">
            CORE SPECIALTIES
          </span>
          <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
            What I'm Known For
          </h2>
        </div>
        <ul className="mx-auto mt-16 grid max-w-4xl gap-3 sm:grid-cols-2">
          {items.map((item, i) => (
            <li
              key={item}
              className="flex items-baseline gap-4 rounded-2xl border border-divider bg-bg-secondary px-6 py-5"
            >
              <span className="font-serif text-sm text-accent-purple">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base text-text-primary">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function InterestsLink() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-text-secondary">
          Beyond my core specialties, I have a wide range of interests across
          sensation, bondage, fetish, and fantasy play.
        </p>
        <a
          href="/about/interests"
          className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-accent-green transition-colors hover:text-accent-purple"
        >
          VIEW THE FULL LIST OF INTERESTS
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

function ByRequest() {
  const items = [
    "ABDL play & age regression",
    "Tickling",
    "Smothering and clothed face-sitting",
    "Spit showers",
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-semibold tracking-[0.3em] text-accent-green">
          BY REQUEST
        </span>
        <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
          By Chemistry & Negotiation
        </h2>
        <p className="mt-6 text-text-secondary">
          Open to these by request and individual chemistry.
        </p>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-divider bg-bg-secondary px-5 py-2.5 text-sm text-text-primary"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Limits() {
  const items = [
    'Sexual contact, nudity requests, or "jobs" of any kind',
    "Bare bottom worship, breast smothering, or intimate body worship",
    "Illegal activity of any kind",
    "Scenes focused on only tease and denial",
    "Suspension rope bondage",
    "Non-negotiated brat play",
    "Non-negotiated dynamics",
    "Switching or bottoming roles in any capacity",
    "Bathroom play",
    "Roman showers",
    "Sweat worship",
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
            HARD LIMITS
          </span>
          <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
            Limits & Areas of Disinterest
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-text-secondary">
            Non-negotiable. Don't ask.
          </p>
        </div>
        <ul className="mt-12 grid gap-3 md:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-divider bg-bg-secondary px-6 py-4"
            >
              <svg className="mt-1 h-4 w-4 flex-shrink-0 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              <span className="text-text-primary">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Advocacy() {
  const pillars = [
    {
      eyebrow: "COACHING",
      title: "Coaching for Connection",
      desc: "Power dynamics don't stop at the dungeon door. They shape how we communicate, fight, love, and heal. I work with individuals and couples navigating kink, desire, and relationship structures with a trauma-informed, pleasure-centered approach. Whether you're brand new or rebuilding after a rupture, I meet you where you are.",
    },
    {
      eyebrow: "ADVOCACY",
      title: "Sex Work Education & Advocacy",
      desc: "This industry requires more than hustle. It demands strategy, emotional resilience, and systems that actually protect you. My coaching for sex workers is built for people ready to stop surviving and start building. Pricing, boundaries, burnout, business infrastructure. I teach from experience, not textbooks.",
    },
    {
      eyebrow: "COMMUNITY",
      title: "Community & Mutual Aid",
      desc: "I'm committed to creating the support systems I wish existed when I was starting out. Grassroots resources for queer folks, sex workers, and creatives. Education, events, and mutual aid for people who have always had to build their own safety nets.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-green">
            MORE THAN THE SCENE
          </span>
          <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
            Teach. Organize. Challenge. Build.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
            Whether I'm walking someone through the nuances of power exchange,
            helping a creator build a sustainable business, or speaking to a
            room about consent and identity, I show up the same way every time:
            direct, prepared, and allergic to empty buzzwords.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-divider bg-bg-secondary p-8"
            >
              <span className="text-[10px] font-semibold tracking-[0.3em] text-accent-purple">
                {p.eyebrow}
              </span>
              <h3 className="mt-3 font-serif text-xl text-text-heading">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {p.desc}
              </p>
            </div>
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
        eyebrow="ABOUT ME"
        title="Educator. Provocateur. Builder. Boss."
        subtitle="Direct, curious, and intentional. A Dominant who finds profound fulfillment in guiding others through their deepest, most intimate fantasies."
      />

      <PhotoGallery
        images={[
          { label: "Editorial 1", src: about.galleryTop[0] },
          { label: "Session vibe", src: about.galleryTop[1] },
          { label: "Studio portrait", src: about.galleryTop[2] },
          { label: "Lifestyle shot", src: about.galleryTop[3] },
          { label: "Candid moment", src: about.galleryTop[4] },
        ]}
      />

      <Divider />
      <ProfessionalIdentity />
      <Journey />
      <MidPageCta />
      <Divider />
      <Philosophy />
      <Divider />
      <CoreSpecialties />
      <InterestsLink />
      <ByRequest />
      <Limits />

      <PhotoGallery
        images={[
          { label: "Behind the scenes", src: about.galleryBottom[0] },
          { label: "Workshop photo", src: about.galleryBottom[1] },
          { label: "Artistic shot", src: about.galleryBottom[2] },
          { label: "Event photo", src: about.galleryBottom[3] },
          { label: "Power portrait", src: about.galleryBottom[4] },
        ]}
      />

      <Divider />
      <Advocacy />
    </>
  );
}

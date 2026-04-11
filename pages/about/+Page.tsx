import PageHero from "@/components/PageHero";
import Divider from "@/components/Divider";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PhotoGallery from "@/components/PhotoGallery";
import { siteConfig } from "@/site.config";
import { portraits, gallery } from "@/images.config";

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
        <ImagePlaceholder label="Professional portrait" aspect="aspect-[3/4]" src={portraits.about1} />
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
            THIS IS AUTHORITY
          </span>
          <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
            Professional Dominatrix
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            I am a professional dominatrix known not just for my skill in
            session, but for my presence. Intellectual, commanding, and fiercely
            self-possessed. My clients don't come to me for tired power plays.
            They come for transformation. For immersion. For the kind of clarity
            that only comes from surrendering to someone who understands the
            erotic and the psychological in equal measure.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            My work is deeply intuitive, built on years of skill, study, and
            lived experience. Every scene I conduct is intentional and exacting.
            Whether I'm weaving ritual, control, fantasy, or discipline, the
            outcome is always the same: I leave an imprint.
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
              A HISTORY OF POWER
            </span>
            <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
              My Journey
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                I've shaped my life around power. Not just wielding it, but
                studying it, refining it, becoming it. My journey into
                professional domination was marked by total immersion. I
                committed myself to learning every aspect of the craft: the
                psychology of control, the elegance of restraint, the mechanics
                of pain and praise.
              </p>
              <p>
                While others played with power, I studied it. I immersed myself
                in the rituals, tools, and emotional mechanics of domination. I
                learned to bend desire, fear, and reverence into a single
                glance.
              </p>
              <p>
                I am not interested in being palatable. I'm not here to dilute
                my experience for anyone's comfort. My work is about creating
                space for people to remember themselves. To return to their
                bodies. To reclaim their worth.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <ImagePlaceholder label="Session photo" aspect="aspect-[4/5]" src={portraits.session1} />
            <ImagePlaceholder label="Teaching photo" aspect="aspect-[4/3]" src={portraits.speaking} />
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
          Looking to Make an Appointment?
        </h3>
        <p className="mt-4 text-text-secondary">
          Sessions, coaching, consults, and more.
        </p>
        <a
          href={siteConfig.acuityUrl}
          target="_blank"
          rel="noopener noreferrer"
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
              WHAT MAKES ME DIFFERENT
            </span>
            <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
              My Philosophy
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                Power with, not power over. Storytelling as dominance. Pleasure
                as liberation. Whether I'm standing behind a camera or across
                the room from a kneeling submissive, my work is about creating
                worlds where people feel seen in their complexity.
              </p>
              <p>
                As a Dominant, I'm not here to reenact tired tropes. I'm here to
                wield power with precision, empathy, and purpose. To use
                discipline, ritual, and sensation as tools for uncovering the
                truth beneath the performance.
              </p>
              <p>
                What I seek isn't compliance. It's devotion. Not from a place of
                shame or scarcity, but from agency, clarity, and trust.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <ImagePlaceholder label="Artistic portrait" aspect="aspect-square" src={portraits.about2} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Advocacy() {
  const pillars = [
    {
      eyebrow: "COACHING",
      title: "Coaching for Connection",
      desc: "Power isn't just play. It's communication. It's nervous system literacy. It's knowing how to be both vulnerable and accountable. I work with individuals and couples navigating kink, dynamics, desire, and relationship structures. Whether you're just starting to explore or rebuilding trust after rupture, I bring a trauma-aware, pleasure-positive lens.",
    },
    {
      eyebrow: "ADVOCACY",
      title: "Sex Work Education & Advocacy",
      desc: "Sex work is work. But it's also strategy, structure, emotional labor, and survival. My coaching for sex workers is designed for those who are tired of spinning their wheels and ready to build something sustainable. From pricing and client engagement to burnout prevention and business systems, I teach what I live.",
    },
    {
      eyebrow: "COMMUNITY",
      title: "Community & Mutual Aid",
      desc: "I believe in building the infrastructure I couldn't find when I needed it most. Community-powered support for queer folks, sex workers, and creatives. Classes, events, and mutual aid for those who live at the edges of power, because that's where change begins.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-green">
            BEYOND THE FANTASY
          </span>
          <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
            Advocate. Educate. Disrupt. Repeat.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
            Whether I'm guiding someone through the nuance of kink and
            communication, helping a sex worker build a real business, or
            standing in front of a room teaching consent from lived experience, I
            bring the same thing every time: clarity, precision, and zero
            performative fluff.
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
        eyebrow="ABOUT THE GODDESS"
        title="Domina. Creator. Educator. Visionary."
        subtitle="I've spent years commanding attention, from the dungeon to the digital sphere to the front lines of sex-positive advocacy. I am a complex, multi-faceted human with a deep wealth of knowledge and lived experience. I'm a dominatrix. A creator. An educator. A visionary."
      />

      <PhotoGallery
        images={[
          { label: "Editorial 1", src: gallery.g1 },
          { label: "Session vibe", src: gallery.g2 },
          { label: "Studio portrait", src: gallery.g3 },
          { label: "Lifestyle shot", src: gallery.g4 },
          { label: "Candid moment", src: gallery.g5 },
        ]}
      />

      <Divider />
      <ProfessionalIdentity />
      <Journey />
      <MidPageCta />
      <Divider />
      <Philosophy />

      <PhotoGallery
        images={[
          { label: "Behind the scenes", src: gallery.g6 },
          { label: "Workshop photo", src: gallery.g7 },
          { label: "Artistic shot", src: gallery.g8 },
          { label: "Event photo", src: gallery.g9 },
          { label: "Power portrait", src: gallery.g10 },
        ]}
      />

      <Divider />
      <Advocacy />
    </>
  );
}

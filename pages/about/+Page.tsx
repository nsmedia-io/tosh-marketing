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
            WHO I AM
          </span>
          <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
            Professional Dominatrix
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            I am a professional dominatrix recognized for far more than
            technique. My reputation is built on presence: sharp, deliberate,
            and completely self-assured. People don't seek me out for
            surface-level thrills. They come because they want to be genuinely
            changed. They want depth, immersion, and the rare experience of
            being held by someone who reads both body and mind with equal
            fluency.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            Everything I do is rooted in years of study, practice, and personal
            evolution. Every scene is crafted with intention. Whether the
            medium is ritual, restraint, fantasy, or discipline, the result
            speaks for itself: people don't forget me.
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
              HOW I GOT HERE
            </span>
            <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
              My Journey
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                I've organized my entire life around understanding power. Not
                just exercising it, but dissecting it, sharpening it, embodying
                it. My path into professional domination was one of complete
                dedication. I threw myself into mastering the craft from every
                angle: the psychology behind surrender, the art of tension, the
                balance between pain and trust.
              </p>
              <p>
                Where others dabbled, I went deep. I studied the emotional
                architecture of dominance. I trained my instincts until I could
                shift someone's entire state with a look.
              </p>
              <p>
                I have zero interest in being easy to swallow. I refuse to water
                down what I know to make anyone more comfortable. What I do is
                create room for people to reconnect with themselves. To land
                back in their bodies. To stop apologizing for what they want.
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
          Ready to Work Together?
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
                Collaboration over coercion. Narrative as a tool of control.
                Desire as a path to freedom. Whether I'm behind a lens or
                standing over someone on their knees, my purpose is the same:
                to build worlds where people are witnessed in their full
                complexity.
              </p>
              <p>
                As a Dominant, I have no patience for worn-out cliches. I bring
                intention, empathy, and surgical precision to every dynamic. I
                use structure, ritual, and sensation to strip away the mask and
                get to what's real underneath.
              </p>
              <p>
                I'm not looking for obedience. I'm looking for surrender that
                comes from a place of strength, self-awareness, and genuine
                choice.
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
        subtitle="I've spent years commanding rooms, reshaping perspectives, and building a career at the intersection of kink, empowerment, and advocacy. I am a dominatrix, a coach, an educator, and a relentless advocate for the people this world tries hardest to silence."
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

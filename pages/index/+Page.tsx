import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import Testimonials from "@/components/Testimonials";
import PhotoGallery from "@/components/PhotoGallery";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { siteConfig } from "@/site.config";
import { portraits, gallery } from "@/images.config";

function AboutTeaser() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-16 lg:gap-24">
        <ImagePlaceholder label="Portrait" aspect="aspect-[3/4]" src={portraits.hero1} />
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
            MEET YOUR GUIDE
          </span>
          <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
            Dominance Is an Art.
            <br />
            <span className="italic">I've Mastered It.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            I'm a professional dominatrix, educator, and consultant who believes
            self-knowledge is the ultimate power move. I've spent years guiding
            people through their most vulnerable and transformative moments with
            equal parts strategy, sass, and heart.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            My work lives at the intersection of empowerment, authenticity, and
            unapologetic rebellion. I don't do palatable. I do powerful.
          </p>
          <a
            href="/about"
            className="mt-8 inline-block w-fit rounded-full bg-accent-green px-8 py-3 text-xs font-semibold tracking-[0.15em] text-text-heading transition-all hover:shadow-[0_0_20px_rgba(45,106,79,0.3)]"
          >
            READ MY STORY
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  const services = [
    {
      eyebrow: "SESSIONS",
      title: "In-Person & Virtual Sessions",
      desc: "Bespoke experiences tailored to your desires. Transformative, intentional, and unapologetically intense.",
      href: "/services",
    },
    {
      eyebrow: "COACHING",
      title: "Life Coaching & Consulting",
      desc: "Strategic guidance on boundaries, communication, relationships, and building a life that actually fits you.",
      href: "/services",
    },
    {
      eyebrow: "EDUCATION",
      title: "Workshops & Speaking",
      desc: "Education rooted in lived experience. Kink, consent, empowerment, and the politics of pleasure.",
      href: "/services",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-green">
            WHAT I OFFER
          </span>
          <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
            Choose Your Adventure
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="group rounded-2xl border border-divider bg-bg-secondary p-8 transition-all hover:border-accent-purple/30 hover:shadow-[0_0_30px_rgba(155,48,255,0.05)]"
            >
              <span className="text-[10px] font-semibold tracking-[0.3em] text-accent-purple">
                {s.eyebrow}
              </span>
              <h3 className="mt-3 font-serif text-xl text-text-heading transition-colors group-hover:text-accent-purple">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {s.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] text-accent-green">
                EXPLORE
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

function BookingCta() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-accent-purple/5 to-bg-primary" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-green/5 blur-[150px]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-4xl text-text-heading md:text-5xl lg:text-6xl">
          Ready To Get Started?
        </h2>
        <p className="mt-6 text-lg text-text-secondary">
          Book a discovery call. No pressure, no scripts. Just a real
          conversation about where you are and where you want to be.
        </p>
        <a
          href={siteConfig.acuityUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-accent-green px-10 py-4 text-sm font-semibold tracking-[0.15em] text-text-heading transition-all hover:shadow-[0_0_30px_rgba(45,106,79,0.3)]"
        >
          SCHEDULE YOUR CALL
        </a>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Hero />
      <PhotoGallery
        images={[
          { label: "Hero shot 1", src: gallery.g1 },
          { label: "Studio portrait", src: gallery.g2 },
          { label: "Session aesthetic", src: gallery.g3 },
          { label: "Editorial look", src: gallery.g4 },
          { label: "Lifestyle vibe", src: gallery.g5 },
        ]}
      />
      <Divider />
      <AboutTeaser />
      <Divider />
      <Testimonials />
      <Divider />
      <ServicesOverview />
      <BookingCta />
    </>
  );
}

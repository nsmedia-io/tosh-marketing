import PageHero from "@/components/PageHero";
import Divider from "@/components/Divider";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { siteConfig } from "@/site.config";
import { portraits, gallery } from "@/images.config";

function ServiceBlock({
  eyebrow,
  title,
  desc,
  details,
  imageLabel,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  details: string[];
  imageLabel: string;
  imageSrc?: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <ImagePlaceholder label={imageLabel} aspect="aspect-[4/5]" src={imageSrc} />
      <div className="flex flex-col justify-center">
        <span className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
          {eyebrow}
        </span>
        <h2 className="mt-3 font-serif text-3xl text-text-heading md:text-4xl">
          {title}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-text-secondary">
          {desc}
        </p>
        <ul className="mt-6 space-y-3">
          {details.map((d) => (
            <li key={d} className="flex items-start gap-3 text-text-secondary">
              <svg className="mt-1 h-4 w-4 shrink-0 text-accent-green" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              <span className="text-sm">{d}</span>
            </li>
          ))}
        </ul>
        <a
          href={siteConfig.acuityUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block w-fit rounded-full bg-accent-green px-8 py-3 text-xs font-semibold tracking-[0.15em] text-bg-primary transition-all hover:shadow-[0_0_20px_rgba(0,200,83,0.3)]"
        >
          BOOK THIS SERVICE
        </a>
      </div>
    </div>
  );
}

function PhotoStrip() {
  const images = [
    { label: "Studio shot 1", src: gallery.g1 },
    { label: "Session vibe", src: gallery.g3 },
    { label: "Editorial", src: gallery.g5 },
    { label: "Behind the scenes", src: gallery.g7 },
    { label: "Lifestyle", src: gallery.g9 },
  ];
  return (
    <section className="py-8">
      <div className="grid grid-cols-2 gap-3 px-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((img) => (
          <ImagePlaceholder
            key={img.label}
            label={img.label}
            src={img.src}
            aspect="aspect-square"
            className="rounded-lg"
          />
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="WHAT I OFFER"
        title="Choose Your Adventure"
        subtitle="I offer a multitude of options to experience, learn, and grow. Below you'll find an assortment of ways I can assist, inspire, command, and nurture."
      />

      <PhotoStrip />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl space-y-32 px-6">
          <ServiceBlock
            eyebrow="IN-PERSON EXPERIENCES"
            title="Private Sessions"
            desc="Bespoke, transformative experiences at my beautiful space. Each session is crafted around your desires, boundaries, and growth edges. This isn't a menu. It's a conversation."
            details={[
              "Fully customized to your experience level and interests",
              "Safe, private, professional environment",
              "Available in Columbus, OH or by travel arrangement",
              "First-time friendly with thorough consultation",
            ]}
            imageLabel="Session environment photo"
            imageSrc={portraits.session1}
          />

          <ServiceBlock
            eyebrow="VIRTUAL SESSIONS"
            title="Online Domination"
            desc="Distance doesn't dilute power. Virtual sessions bring the same intensity, creativity, and psychological depth to wherever you are. Real-time, immersive, and deeply personal."
            details={[
              "Video, audio, and text-based session options",
              "Custom assignments and ongoing dynamic structures",
              "Flexible scheduling across time zones",
              "Perfect for those exploring from a distance",
            ]}
            imageLabel="Virtual session setup"
            imageSrc={portraits.session2}
            reverse
          />

          <ServiceBlock
            eyebrow="1:1 COACHING"
            title="Life Coaching & Consulting"
            desc="Personalized coaching for people navigating kink, relationships, communication, and personal transformation. I bring a trauma-aware, pleasure-positive lens to every conversation. No judgment. No scripts. Just real talk."
            details={[
              "Relationship dynamics and communication coaching",
              "Kink education and exploration guidance",
              "Boundary setting and self-advocacy",
              "Sex worker business coaching and strategy",
            ]}
            imageLabel="Coaching session photo"
            imageSrc={portraits.coaching}
          />

          <ServiceBlock
            eyebrow="INTENSIVE"
            title="VIP Day Experience"
            desc="A full day dedicated to you. We map your vision, build your action plan, and tear down every block standing between you and the life you actually want. Intensive, transformative, and worth every second."
            details={[
              "Full-day immersive coaching experience",
              "Custom action plan you leave with",
              "Follow-up session included",
              "Available in-person or virtual",
            ]}
            imageLabel="VIP day photo"
            imageSrc={portraits.vip}
            reverse
          />

          <ServiceBlock
            eyebrow="EDUCATION"
            title="Workshops & Speaking"
            desc="Education rooted in lived experience, precision, and unapologetic power. I speak and teach on kink, consent, empowerment, sex worker rights, and the politics of pleasure."
            details={[
              "Conference keynotes and panel appearances",
              "Private group workshops and retreats",
              "Kink education and consent frameworks",
              "Sex worker advocacy and business training",
            ]}
            imageLabel="Speaking/workshop photo"
            imageSrc={portraits.speaking}
          />
        </div>
      </section>

      <Divider />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-accent-purple/5 to-bg-primary" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl text-text-heading md:text-5xl">
            Not Sure Where to Start?
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            Book a free discovery call. We'll figure out the right path
            together.
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
    </>
  );
}

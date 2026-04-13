import PageHero from "@/components/PageHero";
import Divider from "@/components/Divider";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PricingTier from "@/components/PricingTier";
import MidCta from "@/components/MidCta";
import { siteConfig } from "@/site.config";
import { portraits } from "@/images.config";

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 text-text-secondary">
          <svg className="mt-1 h-4 w-4 shrink-0 text-accent-green" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          <span className="text-sm">{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="PRIVATE COACHING"
        title="Guidance That Meets You Where You Are"
        subtitle="Whether you're navigating intimacy, power, career, or identity, I bring sharp strategy and genuine care to every conversation. No scripts. No judgment. Just real talk that moves the needle."
      />

      <Divider />

      {/* Relationship & Life Coaching */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
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
              <CheckList
                items={[
                  "Developing consent frameworks that actually work",
                  "Building D/s dynamics with emotional intelligence",
                  "Kink discovery, play negotiation, and aftercare",
                  "Navigating jealousy, insecurity, or mismatched desire",
                  "Power exchange and relationship repair",
                  "Boundary setting and radical self-advocacy",
                  "Supporting neurodivergent partners and systems",
                ]}
              />
            </div>
          </div>

          {/* Pricing */}
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
                className="inline-block rounded-full bg-accent-green px-8 py-3 text-xs font-semibold tracking-[0.15em] text-text-heading transition-all hover:shadow-[0_0_20px_rgba(45,106,79,0.3)]"
              >
                BOOK YOUR CONSULTATION
              </a>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Business Coaching */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
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
              <CheckList
                items={[
                  "Pricing, positioning, and platform diversification",
                  "Brand audits and creative vision development",
                  "Time management, burnout prevention, and scaling up",
                  "Boundaries, parasocial dynamics, and emotional labor",
                  "Marketing strategy across social, email, and niche platforms",
                  "Financial planning, taxes, and long-term strategy",
                  "Hiring help: assistants, editors, or collaborators",
                  "Navigating online censorship and deplatforming",
                ]}
              />
            </div>
            <ImagePlaceholder
              label="Business coaching"
              aspect="aspect-[4/5]"
              src={portraits.vip}
            />
          </div>

          {/* Business pricing */}
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
                className="inline-block rounded-full bg-accent-green px-8 py-3 text-xs font-semibold tracking-[0.15em] text-text-heading transition-all hover:shadow-[0_0_20px_rgba(45,106,79,0.3)]"
              >
                BOOK YOUR CONSULTATION
              </a>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <MidCta
        heading="Not Sure Which Coaching Is Right?"
        sub="Book a free discovery call. We'll figure it out together."
        label="SCHEDULE YOUR CALL"
        href={siteConfig.acuityUrl}
      />
    </>
  );
}

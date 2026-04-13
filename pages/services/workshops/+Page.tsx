import PageHero from "@/components/PageHero";
import Divider from "@/components/Divider";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import TopicList from "@/components/TopicList";
import MidCta from "@/components/MidCta";
import { portraits } from "@/images.config";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="CLASSES & WORKSHOPS"
        title="Blunt. Warm. Actually Useful."
        subtitle="I don't lecture. I break things down until they click. I build rooms where people feel safe enough to ask the questions they've been sitting on for years."
      />

      <Divider />

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
              MY APPROACH
            </span>
            <h2 className="mt-3 font-serif text-3xl text-text-heading md:text-4xl">
              Education That Sticks
            </h2>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-text-secondary">
              <p>
                My workshops combine research-backed frameworks with
                hard-earned personal experience, delivered with warmth, honesty,
                and enough edge to keep you paying attention.
              </p>
              <p>
                I create spaces where people challenge their own assumptions
                and walk out different than they walked in. Growth starts
                with understanding.
              </p>
            </div>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-full bg-accent-green px-8 py-3 text-xs font-semibold tracking-[0.15em] text-text-heading transition-all hover:shadow-[0_0_20px_rgba(45,106,79,0.3)]"
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
      </section>

      {/* Topic grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
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
      </section>

      <Divider />

      <MidCta
        heading="Want to Book a Workshop?"
        sub="I teach for conferences, private groups, organizations, and retreats."
        label="GET IN TOUCH"
        href="/contact"
      />
    </>
  );
}

import PageHero from "@/components/PageHero";
import Divider from "@/components/Divider";
import MidCta from "@/components/MidCta";
import { siteConfig } from "@/site.config";

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Book through my scheduler",
      desc: "Use my online scheduling system to check current availability, pay your 50% deposit, and review the cancellation policy. A few simple steps.",
    },
    {
      n: "02",
      title: "I review your request",
      desc: "I typically take a few days to review and respond. Each booking is considered carefully — please be patient.",
    },
    {
      n: "03",
      title: "Confirmation or refund",
      desc: "If we're a good match, I send confirmation along with detailed instructions. If I'm unavailable or don't feel we're aligned, I promptly refund your deposit in full.",
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-green">
            HOW IT WORKS
          </span>
          <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
            Three Simple Steps
          </h2>
        </div>
        <ol className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-divider bg-bg-secondary p-8"
            >
              <span className="font-serif text-3xl text-accent-purple">
                {s.n}
              </span>
              <h3 className="mt-4 font-serif text-xl text-text-heading">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CustomAvailability() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-accent-purple/30 bg-accent-purple/5 p-8 md:p-10">
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
            CUSTOM AVAILABILITY
          </span>
          <p className="mt-4 text-base leading-relaxed text-text-primary">
            Availability outside of my posted dates and times is charged at{" "}
            <strong className="text-text-heading">double the normal tribute</strong>{" "}
            (or more). When contacting me about custom dates, please confirm
            that you understand this policy.
          </p>
        </div>
      </div>
    </section>
  );
}

function Deposits() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
          DEPOSITS
        </span>
        <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
          50% Non-Refundable
        </h2>
        <p className="mx-auto mt-6 text-lg leading-relaxed text-text-secondary">
          A 50% non-refundable deposit is required to secure your appointment.
          Deposits are non-refundable in the event of cancellation or no-show.
        </p>
      </div>
    </section>
  );
}

function CancellationPolicy() {
  const tiers = [
    {
      penalty: "100%",
      label: "FULL PENALTY",
      window: "No-show or cancellation less than 24 hours prior",
      tone: "high",
    },
    {
      penalty: "50%",
      label: "PARTIAL PENALTY",
      window: "Cancellation 24–36 hours prior",
      tone: "mid",
    },
    {
      penalty: "0%",
      label: "NO PENALTY",
      window: "Cancellation more than 36 hours in advance",
      tone: "low",
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-green">
            CANCELLATION POLICY
          </span>
          <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
            Penalty Structure
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-text-secondary">
            A cancellation penalty is the percentage below of the appointment's
            tribute. If you incur a penalty, you will not be allowed to schedule
            subsequent sessions until the amount is paid in full.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.label}
              className={`rounded-2xl border p-8 ${
                t.tone === "high"
                  ? "border-accent-purple/40 bg-accent-purple/5"
                  : t.tone === "low"
                    ? "border-accent-green/30 bg-accent-green/5"
                    : "border-divider bg-bg-secondary"
              }`}
            >
              <span
                className={`font-serif text-5xl md:text-6xl ${
                  t.tone === "high"
                    ? "text-accent-purple"
                    : t.tone === "low"
                      ? "text-accent-green"
                      : "text-text-heading"
                }`}
              >
                {t.penalty}
              </span>
              <p className="mt-4 text-[10px] font-semibold tracking-[0.3em] text-text-secondary">
                {t.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-primary">
                {t.window}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NoticePeriod() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-divider bg-bg-secondary p-8 md:p-12">
          <h2 className="font-serif text-2xl text-text-heading md:text-3xl">
            Can I book a same-day or next-day session?
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              Unfortunately, I'm unable to accommodate same-day or next-day
              bookings. I require a minimum of 72 hours' notice for all
              appointments.
            </p>
            <p>
              My schedule tends to fill up in advance, and each session is
              thoughtfully prepared and customized to create the best possible
              experience. Thank you for understanding — I truly appreciate
              clients who respect the time and care that go into making our
              time together special.
            </p>
            <p className="italic text-text-heading">Prioritize your pleasure.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeYourSession() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-text-secondary">
          Once your booking is confirmed, please review my expectations for our time together.
        </p>
        <a
          href="/etiquette"
          className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-accent-green transition-colors hover:text-accent-purple"
        >
          READ THE ETIQUETTE
          <svg
            className="h-4 w-4"
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

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="BOOKING"
        title="Booking Your Session"
        subtitle="Book through my online scheduling system. It walks you through current availability, deposit payment, and cancellation policy in a few simple steps."
      />
      <Divider />
      <HowItWorks />
      <CustomAvailability />
      <Divider />
      <Deposits />
      <Divider />
      <CancellationPolicy />
      <NoticePeriod />
      <BeforeYourSession />
      <Divider />
      <MidCta
        heading="Ready to Book?"
        sub="Open the scheduler to check availability, pay your deposit, and submit your request."
        label="OPEN SCHEDULER"
        href={siteConfig.acuityUrl}
      />
    </>
  );
}

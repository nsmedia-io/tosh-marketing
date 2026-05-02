import { useState } from "react";
import PageHero from "@/components/PageHero";
import Divider from "@/components/Divider";
import { siteConfig } from "@/site.config";

type FaqEntry = { q: string; a: React.ReactNode };

function FaqItem({ q, a }: FaqEntry) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        aria-expanded={open}
      >
        <h3 className="font-serif text-lg text-text-heading md:text-xl">{q}</h3>
        <svg
          className={`h-5 w-5 shrink-0 text-accent-purple transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="space-y-4 pb-6 text-text-secondary leading-relaxed">
          {typeof a === "string" ? <p>{a}</p> : a}
        </div>
      )}
    </div>
  );
}

const GENERAL_FAQS: FaqEntry[] = [
  {
    q: "Where does the session take place?",
    a: "I practice out of Wicked Eden in Columbus, Ohio. I also offer off-site and travel sessions for established clients.",
  },
  {
    q: "Are you accepting new in-person clients?",
    a: "Yes, I am! I'm happily accepting a small number of new in-person clients at Wicked Eden in Columbus, OH. If you feel we might be a good fit, I'd love for you to apply through my booking form. I review every application thoughtfully to ensure we're both excited about working together — mutual respect and compatibility are essential. I look forward to possibly meeting you!",
  },
  {
    q: "How do I book an appointment?",
    a: "All bookings are handled through my online request system. You'll be asked for some screening information, your session interests, and what you're hoping to explore. I personally review every request and only move forward with those where I feel a genuine connection and compatibility. I truly value the right fit over anything else, so if you're excited about the possibility of working together, I'd love to receive your application.",
  },
  {
    q: "Do I have to pay a deposit? Is there a vetting process?",
    a: (
      <>
        <p>
          Yes — a 50% deposit is required and non-negotiable. I take time to
          carefully vet every request through professional screening,
          respectful communication, and thoughtful intent. This helps ensure
          we're a great fit and that everyone feels safe and respected.
        </p>
        <p>
          I review applications personally, so I kindly ask that you follow the
          instructions and approach the process with sincerity. I don't require
          a physical ID upfront, but I do need to be able to clearly confirm
          your identity from the information in your booking form. If I can't,
          I'll unfortunately have to decline the request.
        </p>
        <p>
          I appreciate your understanding — it helps me focus on creating
          wonderful sessions with the right people.
        </p>
      </>
    ),
  },
  {
    q: "Do you see newbies?",
    a: (
      <>
        <p>
          Yes, absolutely. I work with people of all experience levels — from
          complete newbies to seasoned veterans, and everyone in between.
        </p>
        <p>
          What matters most isn't how much experience you have, but your
          mindset. Are you respectful, curious, open-minded, and communicative?
          Are you willing to show up with intention and a positive attitude? If
          so, I'd genuinely love to work with you.
        </p>
        <p>
          Don't let inexperience hold you back — I'm happy to guide and support
          you every step of the way.
        </p>
      </>
    ),
  },
  {
    q: "Do you see clients with disabilities or chronic illness?",
    a: (
      <>
        <p>
          Yes, absolutely. I welcome clients with disabilities and chronic
          illnesses. Accessibility is a core part of how I work. I've had the
          pleasure of seeing clients who use mobility aids, who are
          neurodivergent, who live with chronic pain, invisible illnesses, or
          any other condition that requires extra care, time, or adjustments.
        </p>
        <p>
          If you have specific accessibility needs, please let me know when you
          apply — I'll work with you to make sure we can accommodate them
          safely and comfortably. Wicked Eden is very accessible: ground-level
          entrance, private parking, and wide doorways.
        </p>
        <p>
          No request is ever too small. I look forward to creating a session
          that feels right for you.
        </p>
      </>
    ),
  },
  {
    q: "Do you see women, trans, or nonbinary clients?",
    a: (
      <>
        <p>
          Yes, absolutely. I warmly welcome women, trans, nonbinary, and all
          gender-diverse clients. I truly delight in working with people of
          every gender. My play style is explicitly inclusive, and you're free
          to explore submission, sensuality, gender expression, or anything
          else that feels authentic to you.
        </p>
        <p>
          You never need to explain or justify your identity with me — you're
          welcome exactly as you are. I look forward to creating a safe,
          affirming experience together.
        </p>
      </>
    ),
  },
];

const ONLINE_FAQS: FaqEntry[] = [
  {
    q: "What online experiences do you offer?",
    a: (
      <>
        <p>I offer several ways to engage with me from afar:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>My video clip stores</li>
          <li>
            Custom video orders, for those with very specific visions they'd
            like brought to life
          </li>
          <li>
            Tributes, gifts, and wishlists, for those who prefer to worship in
            offerings
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "Do you offer webcam or phone sessions?",
    a: (
      <p>
        Absolutely — by appointment only, just like my in-person sessions.
        Please{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-accent-green underline hover:text-accent-purple"
        >
          email me
        </a>{" "}
        with the type of session you'd like to schedule, how long, and when
        you're available.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="COMMON QUESTIONS"
        title="FAQs"
        subtitle="Everything you might want to know before reaching out. If your question isn't here, send me a message — I'm happy to answer."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          {GENERAL_FAQS.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </div>
      </section>

      <Divider />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-[0.3em] text-accent-green">
              ONLINE EXPERIENCES
            </span>
            <h2 className="mt-3 font-serif text-3xl text-text-heading md:text-4xl">
              From Anywhere
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-secondary">
              Several ways to engage with me from afar — by appointment, custom
              order, or offering.
            </p>
          </div>
          <div className="mt-12">
            {ONLINE_FAQS.map((faq) => (
              <FaqItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 text-center">
        <p className="text-text-secondary">
          Still have questions?{" "}
          <a href="/contact" className="font-medium text-accent-green hover:underline">
            Send me a message
          </a>{" "}
          or{" "}
          <a
            href={siteConfig.acuityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent-green hover:underline"
          >
            book a free call
          </a>
          .
        </p>
      </section>
    </>
  );
}

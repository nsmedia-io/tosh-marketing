import { useState } from "react";

const FAQS = [
  {
    q: "What should I expect in a first session?",
    a: "Your first session is all about getting to know each other. We'll talk about where you are, where you want to be, and whether my approach feels like the right fit. Think of it as a vibe check with substance.",
  },
  {
    q: "Do you offer virtual sessions?",
    a: "Absolutely. Most of my clients work with me virtually — it's flexible, convenient, and just as powerful as in-person. I'm also available for in-person sessions in Columbus, OH.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Life happens. I ask for at least 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee.",
  },
  {
    q: "Is this therapy?",
    a: "Nope. Coaching is forward-focused — we're building your future, not diagnosing the past. If therapeutic support is what you need, I'm happy to provide referrals to wonderful professionals.",
  },
  {
    q: "How many sessions will I need?",
    a: "That depends entirely on your goals. Some people get what they need in a single intensive. Others prefer ongoing weekly or bi-weekly coaching. We'll figure out what works best during your discovery call.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <h4 className="font-serif text-lg text-text-heading md:text-xl">{q}</h4>
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
        <div className="pb-6">
          <p className="leading-relaxed text-text-secondary">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-purple">
            COMMON QUESTIONS
          </span>
          <h2 className="mt-3 font-serif text-4xl text-text-heading md:text-5xl">
            Before You Book
          </h2>
        </div>

        <div className="mt-12">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="text-sm font-medium tracking-[0.1em] text-accent-green transition-colors hover:text-accent-green/80"
          >
            HAVE ANOTHER QUESTION? REACH OUT →
          </a>
        </div>
      </div>
    </section>
  );
}

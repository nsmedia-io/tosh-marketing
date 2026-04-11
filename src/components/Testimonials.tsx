import { useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "She helped me map out a pricing strategy, clean up my brand, and most importantly — own my value. This is mentorship built on lived experience, not buzzwords.",
    author: "R.S.",
    role: "Content Creator",
  },
  {
    quote:
      "I walked in scattered and overwhelmed. Two sessions later, I had a plan, a renewed sense of purpose, and someone in my corner who actually gets it.",
    author: "A.R.",
    role: "Coaching Client",
  },
  {
    quote:
      "Working with her changed my entire approach to my business. She's strategic, she's direct, and she makes you feel like you can take on the world.",
    author: "M.K.",
    role: "Entrepreneur",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-5 w-5 text-accent-green" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Quote icon */}
        <svg className="mx-auto h-10 w-10 text-accent-purple" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>

        {/* Testimonial */}
        <blockquote className="mt-8 font-serif text-xl leading-relaxed text-text-primary md:text-2xl">
          "{TESTIMONIALS[current].quote}"
        </blockquote>

        {/* Stars */}
        <div className="mt-6 flex justify-center">
          <Stars />
        </div>

        {/* Attribution */}
        <p className="mt-4 text-sm font-medium text-accent-green">
          — {TESTIMONIALS[current].author}
        </p>
        <p className="text-sm text-text-secondary">
          {TESTIMONIALS[current].role}
        </p>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === current
                  ? "bg-accent-purple scale-110"
                  : "bg-text-secondary/30 hover:bg-text-secondary/50"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

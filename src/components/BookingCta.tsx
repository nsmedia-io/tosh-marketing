import { siteConfig } from "@/site.config";

export default function BookingCta() {
  return (
    <section id="booking" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-accent-purple/5 to-bg-primary" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-green/5 blur-[150px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-4xl text-text-heading md:text-5xl lg:text-6xl">
          Ready To Get Started?
        </h2>
        <p className="mt-6 text-lg text-text-secondary">
          Book a free discovery call and let's see if we're a good fit. No
          pressure, no scripts — just a real conversation about where you are
          and where you want to be.
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

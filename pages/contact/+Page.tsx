import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { siteConfig } from "@/site.config";
import { portraits } from "@/images.config";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="LET'S TALK"
        title="Get in Touch"
        subtitle="Have a question before booking? Want to see if we're a good fit? Drop me a line."
      />
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - info + image */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl text-text-heading">
                Ways to Reach Me
              </h2>
              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-text-secondary transition-colors hover:text-accent-purple"
                >
                  <svg className="h-5 w-5 text-accent-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  {siteConfig.email}
                </a>
                <div className="flex items-center gap-3 text-text-secondary">
                  <svg className="h-5 w-5 text-accent-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {siteConfig.location}
                </div>
              </div>
            </div>
            <ImagePlaceholder label="Contact page photo" aspect="aspect-[4/3]" src={portraits.contact} />
            <div className="rounded-2xl border border-divider bg-bg-secondary p-6">
              <h3 className="font-serif text-lg text-text-heading">
                Prefer to book directly?
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                Skip the form and schedule a session or discovery call right now.
              </p>
              <a
                href={siteConfig.acuityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-accent-green px-6 py-2.5 text-xs font-semibold tracking-[0.15em] text-text-heading transition-all hover:shadow-[0_0_20px_rgba(45,106,79,0.3)]"
              >
                BOOK NOW
              </a>
            </div>
          </div>

          {/* Right side - form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

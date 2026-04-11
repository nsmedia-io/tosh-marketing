import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import { siteConfig } from "@/site.config";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="COMMON QUESTIONS"
        title="Before You Book"
        subtitle="Everything you need to know before we work together. If your question isn't here, reach out."
      />
      <Faq />
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

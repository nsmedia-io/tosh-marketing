import { siteConfig } from "@/site.config";

export default function Head() {
  return (
    <>
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />

      {/* SEO */}
      <meta name="author" content={siteConfig.name} />
      <link rel="canonical" href={siteConfig.url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteConfig.title} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:url" content={siteConfig.url} />
      <meta
        property="og:image"
        content={`${siteConfig.url}${siteConfig.ogImage}`}
      />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteConfig.title} />
      <meta name="twitter:description" content={siteConfig.description} />
      <meta
        name="twitter:image"
        content={`${siteConfig.url}${siteConfig.ogImage}`}
      />

      {/* JSON-LD: Person + Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                name: siteConfig.name,
                url: siteConfig.url,
                jobTitle: "Life Coach & Consultant",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Columbus",
                  addressRegion: "OH",
                },
                sameAs: Object.values(siteConfig.socials),
              },
              {
                "@type": "Service",
                serviceType: "Life Coaching",
                provider: {
                  "@type": "Person",
                  name: siteConfig.name,
                },
                areaServed: {
                  "@type": "Country",
                  name: "US",
                },
                description: siteConfig.description,
              },
            ],
          }),
        }}
      />
    </>
  );
}

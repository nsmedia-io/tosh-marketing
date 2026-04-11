import { useState } from "react";
import { siteConfig } from "@/site.config";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-2 top-2 z-[100] -translate-y-16 rounded-full bg-accent-green px-6 py-2 text-sm font-semibold text-text-heading transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-divider bg-bg-primary/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="font-serif text-2xl tracking-wide text-text-heading md:text-3xl">
            TOSH
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-[0.2em] text-text-secondary transition-colors hover:text-accent-purple focus:text-accent-purple focus:outline-none focus:ring-2 focus:ring-accent-purple/50 focus:ring-offset-2 focus:ring-offset-bg-primary rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={siteConfig.acuityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-accent-green px-6 py-2.5 text-xs font-semibold tracking-[0.15em] text-text-heading transition-all hover:shadow-[0_0_20px_rgba(45,106,79,0.3)] focus:outline-none focus:ring-2 focus:ring-accent-green/50 focus:ring-offset-2 focus:ring-offset-bg-primary lg:inline-block"
          >
            BOOK A SESSION
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 lg:hidden focus:outline-none focus:ring-2 focus:ring-accent-purple/50 rounded-sm p-1"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block h-0.5 w-6 bg-text-primary transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-text-primary transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-text-primary transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-divider bg-bg-primary px-6 py-6 lg:hidden">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-[0.15em] text-text-secondary transition-colors hover:text-accent-purple"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.acuityUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-block rounded-full bg-accent-green px-6 py-2.5 text-center text-xs font-semibold tracking-[0.15em] text-text-heading"
              >
                BOOK A SESSION
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

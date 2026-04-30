// Asset map for client photos.
//
// Convention: every image lives in /public/ and is named <page>-<slot>.jpg.
// To replace any image, drop a JPG into /public/ with the matching filename.
// No code changes needed — Vite serves /public/* at the site root.
//
// Recommended source: long edge ~1600px, JPG ~80% quality.
// Aspect ratios are enforced via CSS, so source aspect doesn't have to match.

export const home = {
  hero: "/home-hero.jpg",
  gallery: [
    "/home-gallery-1.jpg",
    "/home-gallery-2.jpg",
    "/home-gallery-3.jpg",
    "/home-gallery-4.jpg",
    "/home-gallery-5.jpg",
  ],
};

export const about = {
  portrait: "/about-portrait.jpg",
  session: "/about-session.jpg",
  teaching: "/about-teaching.jpg",
  artistic: "/about-artistic.jpg",
  galleryTop: [
    "/about-gallery-top-1.jpg",
    "/about-gallery-top-2.jpg",
    "/about-gallery-top-3.jpg",
    "/about-gallery-top-4.jpg",
    "/about-gallery-top-5.jpg",
  ],
  galleryBottom: [
    "/about-gallery-bottom-1.jpg",
    "/about-gallery-bottom-2.jpg",
    "/about-gallery-bottom-3.jpg",
    "/about-gallery-bottom-4.jpg",
    "/about-gallery-bottom-5.jpg",
  ],
};

export const services = {
  overview: [
    "/services-overview-1.jpg",
    "/services-overview-2.jpg",
    "/services-overview-3.jpg",
    "/services-overview-4.jpg",
    "/services-overview-5.jpg",
  ],
  coaching: {
    hero: "/services-coaching-hero.jpg",
    vip: "/services-coaching-vip.jpg",
  },
  speaking: {
    hero: "/services-speaking-hero.jpg",
  },
  workshops: {
    hero: "/services-workshops-hero.jpg",
  },
};

export const contact = {
  photo: "/contact-photo.jpg",
};

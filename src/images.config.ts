// Unsplash placeholder images - will be replaced with client's actual photos
// Using Unsplash source URLs with sizing params for dev/placeholder use

const PH = "photo-1534528741775-53994a69daeb"; // primary placeholder (verified working)

// Verified working Unsplash photo IDs
const WORKING = [
  "photo-1604004555489-723a93d6ce74",
  "photo-1589156191108-c762ff4b96ab",
  "photo-1524504388940-b1c1722653e1",
  "photo-1534528741775-53994a69daeb",
  "photo-1531746020798-e6953c6e8e04",
  "photo-1622495966027-e0173192c728",
];

const unsplash = (id: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

const pick = (i: number) => WORKING[i % WORKING.length];

// Portrait-oriented images (3:4 / 4:5 aspect)
export const portraits = {
  hero1: unsplash(pick(0), 800, 1000),
  hero2: unsplash(pick(1), 800, 1000),
  about1: unsplash(pick(2), 800, 1000),
  about2: unsplash(pick(3), 800, 1000),
  session1: unsplash(pick(4), 800, 1000),
  session2: unsplash(pick(5), 800, 1000),
  coaching: unsplash(pick(0), 800, 1000),
  vip: unsplash(pick(1), 800, 1000),
  speaking: unsplash(pick(2), 800, 1000),
  contact: unsplash(pick(3), 800, 1000),
};

// Square images (gallery strips)
export const gallery = {
  g1: unsplash(pick(0), 600, 600),
  g2: unsplash(pick(1), 600, 600),
  g3: unsplash(pick(2), 600, 600),
  g4: unsplash(pick(3), 600, 600),
  g5: unsplash(pick(4), 600, 600),
  g6: unsplash(pick(5), 600, 600),
  g7: unsplash(pick(0), 600, 600),
  g8: unsplash(pick(1), 600, 600),
  g9: unsplash(pick(2), 600, 600),
  g10: unsplash(pick(3), 600, 600),
};

// Landscape images (16:9 / 4:3 aspect)
export const landscapes = {
  wide1: unsplash(pick(0), 1200, 800),
  wide2: unsplash(pick(1), 1200, 800),
};

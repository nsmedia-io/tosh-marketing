// Unsplash placeholder images - will be replaced with client's actual photos
// Using Unsplash source URLs with sizing params for dev/placeholder use

const unsplash = (id: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

// Portrait-oriented images (3:4 / 4:5 aspect)
export const portraits = {
  hero1: unsplash("photo-1620122830784-42bb61c18ccc", 800, 1000),
  hero2: unsplash("photo-1596704017254-9759879c5d58", 800, 1000),
  about1: unsplash("photo-1604004555489-723a93d6ce74", 800, 1000),
  about2: unsplash("photo-1589156191108-c762ff4b96ab", 800, 1000),
  session1: unsplash("photo-1616530955446-e52a5aa0e213", 800, 1000),
  session2: unsplash("photo-1558618666-fcd25c85f82e", 800, 1000),
  coaching: unsplash("photo-1524504388940-b1c1722653e1", 800, 1000),
  vip: unsplash("photo-1534528741775-53994a69daeb", 800, 1000),
  speaking: unsplash("photo-1531746020798-e6953c6e8e04", 800, 1000),
  contact: unsplash("photo-1596704017254-9759879c5d58", 800, 1000),
};

// Square images (gallery strips)
export const gallery = {
  g1: unsplash("photo-1620122830784-42bb61c18ccc", 600, 600),
  g2: unsplash("photo-1604004555489-723a93d6ce74", 600, 600),
  g3: unsplash("photo-1589156191108-c762ff4b96ab", 600, 600),
  g4: unsplash("photo-1616530955446-e52a5aa0e213", 600, 600),
  g5: unsplash("photo-1558618666-fcd25c85f82e", 600, 600),
  g6: unsplash("photo-1524504388940-b1c1722653e1", 600, 600),
  g7: unsplash("photo-1534528741775-53994a69daeb", 600, 600),
  g8: unsplash("photo-1531746020798-e6953c6e8e04", 600, 600),
  g9: unsplash("photo-1596704017254-9759879c5d58", 600, 600),
  g10: unsplash("photo-1622495966027-e0173192c728", 600, 600),
};

// Landscape images (16:9 / 4:3 aspect)
export const landscapes = {
  wide1: unsplash("photo-1620122830784-42bb61c18ccc", 1200, 800),
  wide2: unsplash("photo-1604004555489-723a93d6ce74", 1200, 800),
};

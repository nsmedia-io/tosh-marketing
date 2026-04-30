import PageHero from "@/components/PageHero";
import Divider from "@/components/Divider";
import MidCta from "@/components/MidCta";

function InterestsList() {
  const items = [
    "Sensation play",
    "High protocol scenes",
    "Leather bondage",
    "Rope bondage",
    "Fantasy wrestling",
    "Mummification",
    "Sounding",
    "Sissification",
    "Anal play",
    "Enemas",
    "Financial domination",
    "Chastity",
    "Foot and leg worship",
    "Receiving massages",
    "Boot worship",
    "Interrogation fantasy scenes",
    "Clothing fetishes",
    "Cock and ball bondage",
    "Collar & leash",
    "Cross-dressing and feminization",
    "Electrical play",
    "Nipple play & nipple torture",
    "Pegging",
    "Physical domination",
    "Strap-on play",
    "Total Power Exchange (TPE)",
    "Trampling",
    "Wax play",
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ul className="mx-auto max-w-5xl gap-x-12 sm:columns-2 lg:columns-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 break-inside-avoid py-3 text-text-primary"
            >
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-purple" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="INTERESTS"
        title="What I Enjoy"
        subtitle="A non-exhaustive list of what excites me. I actively seek out unique experiences and new adventures, always eager to explore whatever excites you. If something you love isn't here, ask."
      />
      <InterestsList />
      <Divider />
      <MidCta
        heading="Ready to Connect?"
        sub="Open communication. Mutual chemistry. Real connection."
        label="BOOK A SESSION"
        href="/booking"
      />
    </>
  );
}

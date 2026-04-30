import PageHero from "@/components/PageHero";
import Divider from "@/components/Divider";
import MidCta from "@/components/MidCta";

function Expectations() {
  const items = [
    {
      title: "Hygiene",
      desc: "Come freshly showered and clean. Body hair is not an issue for me — just please be neatly trimmed and ready for play.",
    },
    {
      title: "Punctuality",
      desc: "Please arrive on time. If you're late, the lost time will be deducted from your session.",
    },
    {
      title: "Gifts & Tributes",
      desc: "Gifts and tips are never expected but always warmly appreciated. I invest significant time and energy into every session — a small additional tribute is a lovely way to show your enjoyment and appreciation.",
    },
    {
      title: "Boundaries & Respect",
      desc: "Clear mutual understanding and respect for boundaries is essential. I expect you to know and honor mine, just as I will honor yours.",
    },
    {
      title: "Health Disclosure",
      desc: "Please communicate any allergies, medications, physical limitations, or health concerns in advance. If you are experiencing any visible STD/STI symptoms, rash, or flare-up, please reschedule. Should you arrive with an active issue, you will forfeit the full tribute. Your health and safety matter to me — please respect mine in return.",
    },
    {
      title: "Sobriety",
      desc: "Do not arrive intoxicated or under the influence. If you do, the session will be canceled immediately and tribute will be forfeited. I will not play without clear, enthusiastic consent.",
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ol className="grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <li
              key={it.title}
              className="rounded-2xl border border-divider bg-bg-secondary p-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-2xl text-accent-purple">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl text-text-heading">
                  {it.title}
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                {it.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="ETIQUETTE"
        title="What I Expect"
        subtitle="I'm excited to play with you and create an unforgettable experience. To ensure we both have a safe, enjoyable, and immersive time, here's what I expect from my clients."
      />
      <Divider />
      <Expectations />
      <Divider />
      <MidCta
        heading="Ready to Book?"
        sub="Review my booking process and open the scheduler."
        label="START BOOKING"
        href="/booking"
      />
    </>
  );
}

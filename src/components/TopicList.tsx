export default function TopicList({
  title,
  topics,
  color = "purple",
}: {
  title: string;
  topics: string[];
  color?: "purple" | "green";
}) {
  const accentClass =
    color === "green" ? "text-accent-green" : "text-accent-purple";
  const dotClass =
    color === "green" ? "bg-accent-green" : "bg-accent-purple";

  return (
    <div>
      <h4 className={`text-xs font-semibold tracking-[0.3em] ${accentClass}`}>
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {topics.map((t) => (
          <li
            key={t}
            className="flex items-start gap-3 text-sm text-text-secondary"
          >
            <span
              className={`mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full ${dotClass}`}
            />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

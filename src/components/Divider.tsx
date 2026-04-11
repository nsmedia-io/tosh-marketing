export default function Divider() {
  return (
    <div className="overflow-hidden py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <svg
            key={i}
            className="h-16 w-12 text-accent-purple/15 md:h-20 md:w-16"
            viewBox="0 0 48 80"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
          >
            <line x1="24" y1="0" x2="4" y2="40" />
            <line x1="4" y1="40" x2="24" y2="80" />
            <line x1="24" y1="0" x2="44" y2="40" />
            <line x1="44" y1="40" x2="24" y2="80" />
          </svg>
        ))}
      </div>
    </div>
  );
}

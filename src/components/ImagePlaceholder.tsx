export default function ImagePlaceholder({
  label = "Photo placeholder",
  className = "",
  aspect = "aspect-[3/4]",
  src,
}: {
  label?: string;
  className?: string;
  aspect?: string;
  src?: string;
}) {
  if (src) {
    return (
      <div className={`overflow-hidden rounded-2xl ${aspect} ${className}`}>
        <img
          src={src}
          alt={label}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent-purple/10 via-bg-secondary to-accent-green/8 ${aspect} ${className}`}
    >
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-text-secondary/15"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
          />
        </svg>
        <p className="mt-3 text-xs text-text-secondary/30">{label}</p>
      </div>
    </div>
  );
}

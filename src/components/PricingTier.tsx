export default function PricingTier({
  name,
  price,
  detail,
  desc,
}: {
  name: string;
  price: string;
  detail: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-divider bg-bg-primary p-6">
      <h4 className="font-serif text-lg text-text-heading">{name}</h4>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="font-serif text-2xl text-accent-green">{price}</span>
        <span className="text-xs text-text-secondary">{detail}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
        {desc}
      </p>
    </div>
  );
}

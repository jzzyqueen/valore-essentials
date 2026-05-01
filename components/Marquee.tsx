const ITEMS = ['All-in-One Kits', 'Premium Packaging', 'Travel Confidence', 'Aesthetic. Organized. Ready.', 'Free Returns', 'Luxury Feel'];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-gold/10 py-4 overflow-hidden bg-secondary/50">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 text-cream/50 text-[0.68rem] tracking-[0.25em] uppercase font-medium">
            <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

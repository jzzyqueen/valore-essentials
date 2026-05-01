const TESTIMONIALS = [
  { stars: 5, text: 'The Cloud Nine Kit is everything. I take it on every long-haul. The silk eye mask alone is worth it.', author: 'Adaeze O.', location: 'Lagos', kit: 'Cloud Nine Kit' },
  { stars: 5, text: 'I gifted the Éclat Kit to my sister and she cried. The packaging is museum-level. Absolutely stunning.', author: 'Tiwa M.', location: 'London', kit: 'Éclat Kit' },
  { stars: 5, text: 'The Flow Kit has genuinely made my life easier. Everything charged, nothing missing. 10/10.', author: 'Kwame B.', location: 'Accra', kit: 'The Travel Kit' },
  { stars: 5, text: 'Reset Kit is a travel essential. Landed in Dubai at 3am feeling like a human again.', author: 'Nadia R.', location: 'Dubai', kit: 'Reset Kit' },
  { stars: 5, text: 'My Signature Pouch has been through 14 countries. Still immaculate. Valoré forever.', author: 'Sofia L.', location: 'Milan', kit: 'Signature Pouch' },
  { stars: 5, text: 'The Always Ready Kit saved me during a 6-hour delay at Heathrow. Cannot recommend more.', author: 'Emeka N.', location: 'Abuja', kit: 'Always Ready Kit' },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3 font-medium">Community</p>
          <h2 className="font-serif text-4xl italic">Loved by Travelers</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <blockquote key={i} className="bg-secondary border border-gold/10 rounded-sm p-6 hover:border-gold/30 transition-colors">
              <div className="text-gold text-sm mb-3 tracking-widest">{'★'.repeat(t.stars)}</div>
              <p className="font-serif italic text-cream text-lg leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <footer>
                <p className="text-[0.68rem] tracking-[0.15em] uppercase text-gold">{t.author} — {t.location}</p>
                <p className="text-cream/30 text-xs mt-0.5">Purchased: {t.kit}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

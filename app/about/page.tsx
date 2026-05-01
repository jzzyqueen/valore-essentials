import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'The story behind Valoré Essentials — curated kits for the modern traveler.',
};

const VALUES = [
  { title: 'Curation', desc: 'Every item earns its place. Nothing extra, nothing missing.' },
  { title: 'Aesthetic', desc: 'Beautiful inside and out — the kit and what&apos;s in it.' },
  { title: 'Confidence', desc: 'Prepared doesn\'t just mean organized. It means powerful.' },
  { title: 'Luxury', desc: 'Premium quality without the unnecessary premium markup.' },
];

const TEAM = [
  { name: 'Adaeze Obi', role: 'Founder & Creative Director', img: 'https://via.placeholder.com/300x300/1A1A1D/D4A5A5?text=AO' },
  { name: 'Kwame Mensah', role: 'Head of Product', img: 'https://via.placeholder.com/300x300/1A1A1D/C6A96B?text=KM' },
  { name: 'Sofia Laurent', role: 'Brand & Partnerships', img: 'https://via.placeholder.com/300x300/242428/8B6F7A?text=SL' },
];

export default function AboutPage() {
  return (
    <div className="pt-[70px] min-h-screen">
      {/* Hero */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-70" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(245,241,235,1) 1px,transparent 1px),linear-gradient(90deg,rgba(245,241,235,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-4 font-medium">Our Philosophy</p>
          <h1 className="font-serif text-5xl md:text-6xl italic leading-tight mb-6">Curated so you can<br />simply, arrive.</h1>
          <p className="text-cream/50 leading-relaxed">
            Valoré Essentials was born from a simple truth: the modern traveler deserves more than a half-empty toiletry bag and last-minute scrambles. We curate. You conquer.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative h-[480px]">
            <div className="absolute top-0 left-0 w-[62%] h-[62%] rounded-sm overflow-hidden border border-gold/15 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://via.placeholder.com/500x400/1A1A1D/C6A96B?text=Our+Story" alt="Our story" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-[52%] h-[55%] rounded-sm overflow-hidden border-2 border-gold/20 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://via.placeholder.com/400x360/242428/D4A5A5?text=Curated+Craft" alt="Curated craft" className="w-full h-full object-cover" />
            </div>
            {/* Accent card */}
            <div className="absolute bottom-8 left-0 bg-secondary border border-gold/20 px-4 py-3 rounded-sm shadow-card">
              <span className="font-serif text-2xl text-gold block">2025</span>
              <p className="text-cream/60 text-xs">Founded in Lagos,<br />loved worldwide.</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-4 font-medium">The Story</p>
            <h2 className="font-serif text-4xl italic mb-6 leading-tight">Born from a bag that<br />was never quite enough.</h2>
            <div className="space-y-4 text-cream/60 text-sm leading-relaxed">
              <p>We know the feeling. The scramble at the airport. The forgotten charger. The skin that&apos;s wrecked by recycled air and three time zones. The outfit that arrived, but the rest of you didn&apos;t.</p>
              <p>Valoré was created to fix that. Not with a list of things to pack — but with the kits already packed for you. Every item curated, every detail considered, every kit designed to make you feel like the most prepared person in the room.</p>
              <p>We build kits the way a trusted friend would — thoughtfully, honestly, beautifully.</p>
            </div>
            <div className="mt-8">
              <Link href="/shop" className="bg-gold text-primary px-7 py-3.5 text-[0.7rem] tracking-[0.18em] uppercase font-medium hover:bg-gold/90 transition-all inline-block rounded-sm">
                Shop the Kits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-secondary/20 border-y border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3 font-medium">What We Stand For</p>
            <h2 className="font-serif text-4xl italic">Our Values</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ title, desc }) => (
              <div key={title} className="bg-secondary border border-gold/10 rounded-sm p-6 hover:border-gold/30 transition-colors">
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-2 font-medium">{title}</p>
                <p className="text-cream/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3 font-medium">The People</p>
            <h2 className="font-serif text-4xl italic">Behind Valoré</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {TEAM.map(({ name, role, img }) => (
              <div key={name} className="text-center group">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold/15 group-hover:border-gold/40 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="font-serif text-lg text-cream mb-1">{name}</p>
                <p className="text-cream/40 text-xs tracking-wide">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission CTA */}
      <section className="py-20 px-6 bg-secondary/30 border-t border-gold/10 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-4xl italic mb-4">Ready to travel smarter?</h2>
          <p className="text-cream/50 text-sm mb-8 leading-relaxed">Discover the kit that was made for exactly where you&apos;re going.</p>
          <Link href="/shop" className="bg-gold text-primary px-10 py-4 text-[0.72rem] tracking-[0.2em] uppercase font-medium hover:bg-gold/90 transition-all inline-block rounded-sm">
            Explore the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}

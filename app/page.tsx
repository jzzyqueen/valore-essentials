import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ProductCard from '@/components/ProductCard';
import Testimonials from '@/components/Testimonials';
import { PRODUCTS } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Valoré Essentials — Curated Kits for Modern Travelers',
};

const FEATURED = PRODUCTS.slice(0, 3);
const LIFESTYLE = [
  { img: 'https://via.placeholder.com/400x560/1A1A1D/C6A96B?text=Travel+Style', alt: 'Aesthetic travel' },
  { img: 'https://via.placeholder.com/400x560/242428/D4A5A5?text=Organized+Life', alt: 'Organized essentials' },
  { img: 'https://via.placeholder.com/400x560/1A1A1D/8B6F7A?text=Glow+Ready', alt: 'Glow ready' },
  { img: 'https://via.placeholder.com/400x560/242428/C6A96B?text=Kit+Life', alt: 'Kit lifestyle' },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Featured */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3 font-medium">Curated with intention</p>
            <h2 className="font-serif text-4xl italic mb-3">Featured Kits</h2>
            <p className="text-cream/50 max-w-md mx-auto text-sm leading-relaxed">
              Each kit is thoughtfully assembled — premium tools, luxe packaging, always ready for wherever you&apos;re going.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 80} />)}
          </div>
          <div className="text-center mt-10">
            <Link href="/shop" className="border border-gold/30 text-gold px-8 py-3.5 text-[0.7rem] tracking-[0.18em] uppercase font-medium hover:bg-gold hover:text-primary transition-all inline-block rounded-sm">
              View All Kits →
            </Link>
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3 font-medium">The Valoré Life</p>
              <h2 className="font-serif text-4xl">Always ready.<br /><em className="text-gold">Always radiant.</em></h2>
            </div>
            <div>
              <p className="text-cream/50 leading-relaxed mb-6">
                Travel shouldn&apos;t mean compromise. Valoré kits are designed to preserve your ritual — wherever you land, whatever the hour.
              </p>
              <Link href="/shop" className="border border-gold/30 text-cream px-6 py-3 text-[0.68rem] tracking-[0.18em] uppercase font-medium hover:border-gold hover:text-gold transition-all inline-block rounded-sm">
                Shop All Kits →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LIFESTYLE.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-sm"
                style={{ aspectRatio: '3/4', marginTop: i === 1 ? '3rem' : i === 3 ? '-2rem' : '0' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.img} alt={img.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Her/Him split */}
      <section className="grid md:grid-cols-2 min-h-[70vh]">
        {/* Her */}
        <Link href="/shop/her" className="group relative flex flex-col justify-end p-10 md:p-14 overflow-hidden cursor-pointer min-h-[50vh]">
          <div className="absolute inset-0 bg-gradient-to-br from-plum/20 via-mauve/15 to-primary/80" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://via.placeholder.com/800x900/1A1A1D/D4A5A5?text=For+Her" alt="For Her" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
          <div className="relative z-10">
            <div className="w-10 h-px bg-gold mb-4" />
            <p className="text-[0.62rem] tracking-[0.3em] uppercase text-rose mb-2">She Collection</p>
            <h2 className="font-serif text-4xl italic mb-3 text-cream">For Her</h2>
            <p className="text-cream/50 text-sm mb-6 max-w-xs">Rose-touched kits for the woman who curates her confidence with care.</p>
            <span className="text-[0.68rem] tracking-[0.18em] uppercase border border-gold/30 text-cream px-5 py-2.5 inline-block group-hover:border-gold group-hover:text-gold transition-colors rounded-sm">
              Shop For Her →
            </span>
          </div>
        </Link>

        {/* Him */}
        <Link href="/shop/him" className="group relative flex flex-col justify-end p-10 md:p-14 overflow-hidden cursor-pointer min-h-[50vh]">
          <div className="absolute inset-0 bg-gradient-to-br from-navy/40 via-forest/15 to-primary/80" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://via.placeholder.com/800x900/1A1A1D/1E3A5F?text=For+Him" alt="For Him" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
          <div className="relative z-10">
            <div className="w-10 h-px bg-gold mb-4" />
            <p className="text-[0.62rem] tracking-[0.3em] uppercase text-blue-400 mb-2">He Collection</p>
            <h2 className="font-serif text-4xl italic mb-3 text-cream">For Him</h2>
            <p className="text-cream/50 text-sm mb-6 max-w-xs">Steel-structured kits engineered for the man who moves with intention.</p>
            <span className="text-[0.68rem] tracking-[0.18em] uppercase border border-gold/30 text-cream px-5 py-2.5 inline-block group-hover:border-gold group-hover:text-gold transition-colors rounded-sm">
              Shop For Him →
            </span>
          </div>
        </Link>
      </section>

      <Testimonials />

      {/* CTA Banner */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-glow opacity-30" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-4 font-medium">Always Ready?</p>
          <h2 className="font-serif text-4xl md:text-5xl italic mb-4">Get Your Kit</h2>
          <p className="text-cream/50 mb-8 leading-relaxed">Join 10,000+ travelers who never arrive unprepared.</p>
          <Link href="/shop" className="bg-gold text-primary px-10 py-4 text-[0.72rem] tracking-[0.2em] uppercase font-medium hover:bg-gold/90 transition-all hover:-translate-y-0.5 hover:shadow-gold inline-block rounded-sm">
            Shop All Kits
          </Link>
        </div>
      </section>
    </>
  );
}

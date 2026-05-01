'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { PRODUCTS } from '@/lib/products';

const HERO_PRODUCTS = PRODUCTS.slice(0, 3);

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % HERO_PRODUCTS.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[70px]">
      {/* BG */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(245,241,235,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(245,241,235,.8) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Glow orbs */}
      <div className="absolute top-1/2 right-[30%] -translate-y-1/2 w-96 h-96 rounded-full bg-gold/5 blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-rose/5 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Text */}
        <div>
          
          <h1 className="font-serif font-light text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">
            Curated<br />
            <span className="italic text-gold">Essentials</span><br />
            for You <br />
            On The Go
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed mb-10 max-w-md">
            Every kit, every detail — curated so you feel prepared, put-together, and effortlessly confident anywhere.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="bg-gold text-primary px-8 py-4 text-[0.72rem] tracking-[0.2em] uppercase font-medium hover:bg-gold/90 transition-all hover:-translate-y-0.5 hover:shadow-gold rounded-sm"
            >
              Shop All Kits
            </Link>
            <Link
              href="/about"
              className="border border-gold/30 text-cream px-8 py-4 text-[0.72rem] tracking-[0.2em] uppercase font-medium hover:border-gold hover:text-gold transition-all rounded-sm"
            >
              Our Story
            </Link>
          </div>

          {/* Floating info cards */}
          <div className="flex flex-col gap-2 mt-10">
            {['Free shipping over $80', '7 curated kits', 'Loved by 10k+ travelers'].map((txt, i) => (
              <div key={i} className="flex items-center gap-3 bg-charcoal/80 border border-gold/10 w-fit px-4 py-2 rounded-sm backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-cream/60 text-xs tracking-wide">{txt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="hidden md:flex flex-col items-center gap-6">
          <div className="relative w-full max-w-sm aspect-square">
            {/* Rings */}
            <div className="absolute inset-0 border border-gold/10 rounded-full animate-spin-slow" />
            <div className="absolute inset-8 border border-rose/10 rounded-full" style={{ animation: 'spin 18s linear infinite reverse' }} />

            {/* Product image */}
            <div className="absolute inset-16 rounded-full overflow-hidden shadow-gold">
              {HERO_PRODUCTS.map((p, i) => (
                <div key={p.id} className={`absolute inset-0 transition-opacity duration-700 ${i === active ? 'opacity-100' : 'opacity-0'}`}>
                  <Image src={p.img} alt={p.name} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Dot nav */}
          <div className="flex gap-2">
            {HERO_PRODUCTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${i === active ? 'bg-gold w-6 h-1.5' : 'bg-cream/20 w-1.5 h-1.5'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Active product name */}
          <div className="text-center">
            <p className="font-serif italic text-cream/80">{HERO_PRODUCTS[active].name}</p>
            <p className="text-gold text-sm font-serif">${HERO_PRODUCTS[active].price}</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
        <span className="text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream/30 to-transparent" />
      </div>
    </section>
  );
}

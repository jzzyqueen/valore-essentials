import type { Metadata } from 'next';
import ShopClient from '../ShopClient';

export const metadata: Metadata = {
  title: 'For Her — Kits',
  description: 'Rose-touched kits curated for the woman who travels with intention.',
};

export default function HerPage() {
  return (
    <div className="pt-[70px] min-h-screen">
      <div className="relative py-20 px-6 text-center border-b border-rose/10 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(139,111,122,0.2) 0%, rgba(92,59,94,0.1) 50%, rgba(11,11,13,0.9) 100%)' }} />
        <div className="relative z-10">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-rose mb-3 font-medium">She Collection</p>
          <h1 className="font-serif text-5xl italic mb-4 text-cream">For Her</h1>
          <p className="text-cream/50 max-w-md mx-auto text-sm leading-relaxed">
            Rose-touched kits for the woman who curates her confidence with care.
          </p>
        </div>
      </div>
      <ShopClient initialFilter="her" />
    </div>
  );
}

import type { Metadata } from 'next';
import ShopClient from '../ShopClient';

export const metadata: Metadata = {
  title: 'For Him — Kits',
  description: 'Steel-structured kits engineered for the man who moves with intention.',
};

export default function HimPage() {
  return (
    <div className="pt-[70px] min-h-screen">
      <div className="relative py-20 px-6 text-center border-b border-navy/30 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(30,58,95,0.4) 0%, rgba(45,74,58,0.1) 50%, rgba(11,11,13,0.9) 100%)' }} />
        <div className="relative z-10">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-blue-400 mb-3 font-medium">He Collection</p>
          <h1 className="font-serif text-5xl italic mb-4 text-cream">For Him</h1>
          <p className="text-cream/50 max-w-md mx-auto text-sm leading-relaxed">
            Steel-structured kits engineered for the man who moves with intention.
          </p>
        </div>
      </div>
      <ShopClient initialFilter="him" />
    </div>
  );
}

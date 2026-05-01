import type { Metadata } from 'next';
import ShopClient from './ShopClient';

export const metadata: Metadata = {
  title: 'Shop All Kits',
  description: 'Browse all Valoré Essentials kits — curated for her, for him, and for everyone.',
};

export default function ShopPage() {
  return (
    <div className="pt-[70px] min-h-screen">
      {/* Header */}
      <div className="relative py-20 px-6 text-center bg-secondary/30 border-b border-gold/10 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-50" />
        <div className="relative z-10">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3 font-medium">The Full Collection</p>
          <h1 className="font-serif text-5xl italic mb-4">Shop All Kits</h1>
          <p className="text-cream/50 max-w-md mx-auto text-sm leading-relaxed">
            Seven essential kits, one elevated philosophy. Select your vibe — we handle the rest.
          </p>
        </div>
      </div>
      <ShopClient />
    </div>
  );
}

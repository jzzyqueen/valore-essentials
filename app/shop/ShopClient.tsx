'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, HER_PRODUCTS, HIM_PRODUCTS, Product } from '@/lib/products';
import { cn } from '@/lib/utils';

type Filter = 'all' | 'her' | 'him' | 'price-asc' | 'price-desc';

type Props = { initialFilter?: 'all' | 'her' | 'him' };

export default function ShopClient({ initialFilter = 'all' }: Props) {
  const [filter, setFilter] = useState<Filter>(initialFilter);

  const products: Product[] = useMemo(() => {
    let list = filter === 'her' ? HER_PRODUCTS : filter === 'him' ? HIM_PRODUCTS : PRODUCTS;
    if (filter === 'price-asc') list = [...PRODUCTS].sort((a, b) => a.price - b.price);
    if (filter === 'price-desc') list = [...PRODUCTS].sort((a, b) => b.price - a.price);
    return list;
  }, [filter]);

  const FILTERS: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All Kits' },
    { key: 'her', label: 'For Her' },
    { key: 'him', label: 'For Him' },
    { key: 'price-asc', label: 'Price ↑' },
    { key: 'price-desc', label: 'Price ↓' },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={cn(
                'px-5 py-2 text-[0.68rem] tracking-[0.15em] uppercase font-medium rounded-full border transition-all',
                filter === key
                  ? 'bg-gold/15 border-gold text-gold'
                  : 'border-gold/20 text-cream/50 hover:border-gold/50 hover:text-cream/80'
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Nav shortcuts */}
        <div className="flex gap-3 mb-8">
          <Link href="/shop/her" className="text-xs text-rose/60 hover:text-rose transition-colors tracking-wide">
            → Her Collection
          </Link>
          <span className="text-cream/20">·</span>
          <Link href="/shop/him" className="text-xs text-blue-400/60 hover:text-blue-400 transition-colors tracking-wide">
            → Him Collection
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={i * 60} />
          ))}
        </div>

        {products.length === 0 && (
          <p className="text-cream/30 text-center py-20 font-serif italic text-xl">No kits found.</p>
        )}
      </div>
    </section>
  );
}

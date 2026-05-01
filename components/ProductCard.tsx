'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

type Props = { product: Product; delay?: number; };

const BADGE_STYLES: Record<string, string> = {
  her:       'bg-rose/20 text-rose border-rose/30',
  him:       'bg-navy/40 text-blue-300 border-blue-800',
  unisex:    'bg-gold/15 text-gold border-gold/30',
  bestseller:'bg-gold text-primary border-transparent',
};

export default function ProductCard({ product, delay = 0 }: Props) {
  const { add } = useCart();
  const [wishlist, setWishlist] = useState(false);
  const [adding, setAdding] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    setAdding(true);
    add(product);
    setTimeout(() => setAdding(false), 1200);
  };

  return (
    <article
      className="group bg-secondary border border-gold/10 rounded-sm overflow-hidden hover:border-gold/40 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-card"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link href={`/product/${product.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Badge */}
          <span className={cn('absolute top-3 left-3 text-[0.6rem] tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm border', BADGE_STYLES[product.badge])}>
            {product.badgeLabel}
          </span>
          {/* Wishlist */}
          <button
            onClick={(e) => { e.preventDefault(); setWishlist(!wishlist); }}
            className={cn('absolute top-3 right-3 w-8 h-8 rounded-full border backdrop-blur-sm flex items-center justify-center transition-all', wishlist ? 'border-red-400 text-red-400 bg-red-400/10' : 'border-gold/20 text-cream/40 bg-primary/60 hover:border-gold hover:text-gold')}
            aria-label="Toggle wishlist"
          >
            {wishlist ? '♥' : '♡'}
          </button>
        </div>

        {/* Info */}
        <div className="p-5">
          <p className="text-[0.62rem] tracking-[0.2em] uppercase text-gold mb-1">{product.tag}</p>
          <h3 className="font-serif text-lg text-cream mb-1.5">{product.name}</h3>
          <p className="text-cream/50 text-sm line-clamp-2 mb-4">{product.desc}</p>

          {/* Stars */}
          <div className="flex items-center gap-1.5 mb-4">
            <span className="text-gold text-xs">{'★'.repeat(Math.round(product.rating))}</span>
            <span className="text-cream/40 text-xs">{product.rating} ({product.reviews})</span>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-serif text-2xl text-gold">${product.price} <span className="text-sm text-cream/40 font-sans">USD</span></p>
          </div>
        </div>
      </Link>

      <div className="px-5 pb-5 flex gap-2">
        <button
          onClick={handleAdd}
          className={cn(
            'flex-1 py-2.5 text-[0.68rem] tracking-[0.15em] uppercase font-medium transition-all duration-200 rounded-sm border',
            adding
              ? 'bg-gold/20 border-gold text-gold'
              : 'bg-gold/10 border-gold/30 text-gold hover:bg-gold hover:text-primary hover:border-gold'
          )}
        >
          {adding ? '✦ Added' : 'Add to Cart'}
        </button>
        <Link
          href={`/product/${product.slug}`}
          className="px-3 py-2.5 border border-gold/20 text-cream/50 hover:border-gold hover:text-cream text-[0.68rem] tracking-[0.12em] uppercase font-medium transition-all rounded-sm"
        >
          View
        </Link>
      </div>
    </article>
  );
}

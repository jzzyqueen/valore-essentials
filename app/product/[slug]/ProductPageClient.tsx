'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/CartContext';
import ProductCard from '@/components/ProductCard';
import { cn } from '@/lib/utils';

type Props = { product: Product; related: Product[] };

const REVIEWS = [
  { stars: 5, name: 'Adaeze O.', date: 'March 2026', text: 'Absolutely worth every penny. The packaging is stunning and the quality inside is just as good.' },
  { stars: 5, name: 'Tiwa M.', date: 'February 202', text: 'I&apos;ve bought three of these now — one for me, two as gifts. Everyone is obsessed.' },
  { stars: 4, name: 'Sofia L.', date: 'January 2026', text: 'Gorgeous kit. Would love a slightly bigger size option but otherwise perfect.' },
];

export default function ProductPageClient({ product, related }: Props) {
  const [activeImg, setActiveImg] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { add } = useCart();

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-[70px] min-h-screen">
      {/* Breadcrumb */}
      <div className="px-6 py-4 border-b border-gold/10">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-cream/40">
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-cream transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-cream/70">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Gallery */}
          <div className="sticky top-24">
            <div className="relative aspect-square rounded-sm overflow-hidden mb-4 border border-gold/10 group">
              <Image
                src={product.images[activeImg]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={cn('relative w-20 aspect-square rounded-sm overflow-hidden border-2 transition-all', activeImg === i ? 'border-gold' : 'border-gold/15 opacity-60 hover:opacity-100')}
                >
                  <Image src={img} alt={`${product.name} view ${i + 1}`} fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-[0.62rem] tracking-[0.25em] uppercase text-gold mb-2 font-medium">{product.tag}</p>
            <h1 className="font-serif text-4xl mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-gold">{'★'.repeat(Math.round(product.rating))}</span>
              <span className="text-cream/50 text-sm">{product.rating}/5 · {product.reviews} reviews</span>
            </div>

            <p className="font-serif text-4xl text-gold mb-2">${product.price} <span className="font-sans text-sm text-cream/40">USD</span></p>
            <p className="text-cream/50 text-sm mb-6 leading-relaxed">{product.desc}</p>

            <div className="border-t border-gold/10 pt-6 mb-6">
              <p className="text-sm text-cream/80 italic font-serif mb-6">&ldquo;{product.benefit}&rdquo;</p>

              {/* Color variants */}
              <div className="mb-6">
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-3 font-medium">Available In</p>
                <div className="flex gap-2">
                  {product.colors.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveColor(i)}
                      style={{ background: c }}
                      className={cn('w-7 h-7 rounded-full transition-all', activeColor === i ? 'ring-2 ring-cream ring-offset-2 ring-offset-primary scale-110' : 'opacity-70 hover:opacity-100')}
                      aria-label={`Color option ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Qty */}
              <div className="mb-6">
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-3 font-medium">Quantity</p>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-9 h-9 border border-gold/25 text-cream hover:border-gold transition-colors rounded-sm flex items-center justify-center">−</button>
                  <span className="w-8 text-center text-cream">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="w-9 h-9 border border-gold/25 text-cream hover:border-gold transition-colors rounded-sm flex items-center justify-center">+</button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={handleAdd}
                  className={cn('flex-1 py-4 text-[0.72rem] tracking-[0.2em] uppercase font-medium transition-all rounded-sm', added ? 'bg-gold/20 border-gold border text-gold' : 'bg-gold text-primary hover:bg-gold/90')}
                >
                  {added ? '✦ Added to Cart' : 'Add to Cart'}
                </button>
                <button className="flex-1 py-4 border border-gold/30 text-cream text-[0.72rem] tracking-[0.2em] uppercase font-medium hover:border-gold hover:text-gold transition-all rounded-sm">
                  Buy Now
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {['Free Shipping $80+', 'Easy Returns', 'Secure Checkout'].map(badge => (
                  <span key={badge} className="text-[0.6rem] tracking-[0.12em] uppercase text-cream/40 border border-gold/10 px-3 py-1.5 rounded-sm">
                    ✦ {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* What's Inside */}
            <div className="border-t border-gold/10 pt-6">
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-4 font-medium">What&apos;s Inside</p>
              <ul className="space-y-2">
                {product.inside.map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-cream/70">
                    <span className="text-gold text-[0.6rem]">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <section className="mt-20 pt-14 border-t border-gold/10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2 font-medium">Community</p>
              <h2 className="font-serif text-3xl italic">Reviews</h2>
            </div>
            <div className="text-right">
              <p className="font-serif text-4xl text-gold">{product.rating}</p>
              <p className="text-gold text-sm">{'★'.repeat(5)}</p>
              <p className="text-cream/40 text-xs">{product.reviews} reviews</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-secondary border border-gold/10 rounded-sm p-5 hover:border-gold/25 transition-colors">
                <div className="text-gold text-sm mb-2">{'★'.repeat(r.stars)}</div>
                <p className="font-serif italic text-cream text-base leading-relaxed mb-3">&ldquo;{r.text}&rdquo;</p>
                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-gold">{r.name}</p>
                <p className="text-cream/30 text-xs mt-0.5">{r.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20 pt-14 border-t border-gold/10">
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3 font-medium">You May Also Like</p>
            <h2 className="font-serif text-3xl italic mb-10">Related Kits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 80} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

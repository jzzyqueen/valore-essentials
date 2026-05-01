'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';

export default function CartPage() {
  const { cart, total, count, remove, setQty } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-[70px] min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="font-serif text-5xl italic text-gold mb-4">Your cart is empty</p>
        <p className="text-cream/50 text-sm mb-8">Add a kit to get started.</p>
        <Link href="/shop" className="bg-gold text-primary px-8 py-3.5 text-[0.7rem] tracking-[0.18em] uppercase font-medium hover:bg-gold/90 transition-all rounded-sm">
          Browse Kits &rarr;
        </Link>
      </div>
    );
  }

  const shipping = total >= 80 ? 0 : 9.99;
  const tax = parseFloat((total * 0.075).toFixed(2));
  const grandTotal = (total + shipping + tax).toFixed(2);

  return (
    <div className="pt-[70px] min-h-screen">
      <div className="border-b border-gold/10 py-5 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-1 font-medium">Your Cart</p>
          <h1 className="font-serif text-3xl italic">{count} {count === 1 ? 'Kit' : 'Kits'}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex gap-5 p-5 bg-secondary border border-gold/10 rounded-sm hover:border-gold/25 transition-colors">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-sm overflow-hidden">
                  <Image src={item.img} alt={item.name} fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-gold mb-1">{item.tag}</p>
                  <Link href={`/product/${item.slug}`} className="font-serif text-lg text-cream hover:text-gold transition-colors block">{item.name}</Link>
                  <p className="text-cream/40 text-xs mt-0.5 truncate">{item.desc}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => setQty(item.id, item.qty - 1)} className="w-8 h-8 border border-gold/20 text-cream/60 flex items-center justify-center hover:border-gold hover:text-cream transition-colors rounded-sm text-sm">-</button>
                      <span className="text-cream text-sm w-6 text-center">{item.qty}</span>
                      <button onClick={() => setQty(item.id, item.qty + 1)} className="w-8 h-8 border border-gold/20 text-cream/60 flex items-center justify-center hover:border-gold hover:text-cream transition-colors rounded-sm text-sm">+</button>
                    </div>
                    <button onClick={() => remove(item.id)} className="text-cream/30 hover:text-red-400 transition-colors text-xs tracking-wide">Remove</button>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-serif text-xl text-gold">${(item.price * item.qty).toFixed(2)}</p>
                  {item.qty > 1 && <p className="text-cream/30 text-xs mt-0.5">${item.price} each</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-secondary border border-gold/15 rounded-sm p-6 sticky top-24">
            <h2 className="font-serif text-xl italic mb-6 pb-4 border-b border-gold/10">Order Summary</h2>
            <div className="space-y-3 mb-5 text-sm">
              <div className="flex justify-between text-cream/60">
                <span>Subtotal ({count} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-cream/60">
                <span>Shipping</span>
                {shipping === 0 ? <span className="text-gold">Free</span> : <span>${shipping.toFixed(2)}</span>}
              </div>
              <div className="flex justify-between text-cream/60">
                <span>Tax (7.5%)</span>
                <span>${tax}</span>
              </div>
            </div>

            {shipping > 0 && (
              <div className="bg-gold/10 border border-gold/20 rounded-sm px-4 py-3 mb-5 text-center">
                <p className="text-gold text-xs tracking-wide">Add ${(80 - total).toFixed(2)} more for free shipping</p>
              </div>
            )}

            <div className="flex justify-between items-center py-4 border-t border-gold/10 mb-5">
              <span className="text-[0.68rem] tracking-[0.12em] uppercase text-cream/60">Total</span>
              <span className="font-serif text-2xl text-gold">${grandTotal}</span>
            </div>

            <button className="w-full bg-gold text-primary py-4 text-[0.72rem] tracking-[0.2em] uppercase font-medium hover:bg-gold/90 transition-all rounded-sm mb-3">
              Checkout with Stripe
            </button>
            <Link href="/shop" className="block text-center border border-gold/25 text-cream/60 py-3 text-[0.68rem] tracking-[0.15em] uppercase hover:border-gold hover:text-cream transition-all rounded-sm">
              Continue Shopping
            </Link>
            <p className="text-center text-cream/25 text-xs mt-4">Secure checkout - SSL encrypted</p>
          </div>
        </div>
      </div>
    </div>
  );
}

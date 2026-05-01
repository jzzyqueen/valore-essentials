'use client';
import Image from 'next/image';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

export default function CartDrawer() {
  const { cart, count, total, remove, setQty, isOpen, closeCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn('fixed inset-0 z-[60] bg-primary/70 backdrop-blur-sm transition-opacity duration-300', isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed top-0 right-0 bottom-0 z-[70] w-full sm:w-96 bg-secondary border-l border-gold/15 flex flex-col transition-transform duration-400',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between p-5 border-b border-gold/10">
          <h2 className="text-[0.7rem] tracking-[0.25em] uppercase text-gold font-medium">Your Cart ({count})</h2>
          <button onClick={closeCart} className="text-cream/40 hover:text-cream transition-colors text-lg">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif italic text-xl text-cream/40 mb-2">Your cart is empty</p>
              <p className="text-cream/30 text-sm">Add a kit to get started.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {cart.map(item => (
                <li key={item.id} className="flex gap-3 p-3 border border-gold/10 rounded-sm">
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-sm overflow-hidden">
                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-cream truncate">{item.name}</p>
                    <p className="text-gold text-sm font-medium">${item.price}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <button onClick={() => setQty(item.id, item.qty - 1)} className="w-6 h-6 border border-gold/20 text-cream/60 text-sm flex items-center justify-center hover:border-gold hover:text-cream transition-colors rounded-sm">−</button>
                      <span className="text-sm text-cream w-5 text-center">{item.qty}</span>
                      <button onClick={() => setQty(item.id, item.qty + 1)} className="w-6 h-6 border border-gold/20 text-cream/60 text-sm flex items-center justify-center hover:border-gold hover:text-cream transition-colors rounded-sm">+</button>
                    </div>
                  </div>
                  <button onClick={() => remove(item.id)} className="text-cream/30 hover:text-red-400 transition-colors text-sm self-start mt-1">✕</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-5 border-t border-gold/10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[0.7rem] tracking-[0.1em] uppercase text-cream/50">Subtotal</span>
              <span className="font-serif text-2xl text-gold">${total}</span>
            </div>
            <button className="w-full bg-gold text-primary py-3.5 text-[0.72rem] tracking-[0.18em] uppercase font-medium hover:bg-gold/90 transition-colors rounded-sm">
              Checkout with Stripe →
            </button>
            <p className="text-center text-cream/30 text-xs mt-3">Secure checkout — SSL encrypted</p>
          </div>
        )}
      </aside>
    </>
  );
}

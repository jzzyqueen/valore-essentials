'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { CartItem, getCart, addToCart, removeFromCart, updateQty, cartTotal, cartCount } from './cart';
import { Product } from './products';

type CartCtx = {
  cart: CartItem[];
  count: number;
  total: number;
  add: (p: Product, qty?: number) => void;
  remove: (id: number) => void;
  setQty: (id: number, qty: number) => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { setCart(getCart()); }, []);

  const add = useCallback((p: Product, qty = 1) => {
    setCart(addToCart(p, qty));
    setIsOpen(true);
  }, []);

  const remove = useCallback((id: number) => { setCart(removeFromCart(id)); }, []);
  const setQty = useCallback((id: number, qty: number) => { setCart(updateQty(id, qty)); }, []);

  return (
    <CartContext.Provider value={{
      cart, count: cartCount(cart), total: cartTotal(cart),
      add, remove, setQty,
      isOpen, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false),
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}

import { Product } from './products';

export type CartItem = Product & { qty: number };

const KEY = 'valore_cart';

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
}

export function saveCart(cart: CartItem[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(cart));
}

export function addToCart(product: Product, qty = 1): CartItem[] {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === product.id);
  if (idx > -1) cart[idx].qty += qty;
  else cart.push({ ...product, qty });
  saveCart(cart);
  return cart;
}

export function removeFromCart(id: number): CartItem[] {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  return cart;
}

export function updateQty(id: number, qty: number): CartItem[] {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === id);
  if (idx > -1) { if (qty <= 0) cart.splice(idx, 1); else cart[idx].qty = qty; }
  saveCart(cart);
  return cart;
}

export function cartTotal(cart: CartItem[]) {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

export function cartCount(cart: CartItem[]) {
  return cart.reduce((s, i) => s + i.qty, 0);
}

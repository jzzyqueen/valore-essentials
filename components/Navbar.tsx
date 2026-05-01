'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/shop/her', label: 'For Her' },
  { href: '/shop/him', label: 'For Him' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
          scrolled ? 'h-14 bg-primary/90 backdrop-blur-xl border-b border-gold/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
                   : 'h-[70px] bg-primary/70 backdrop-blur-md border-b border-gold/5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-serif italic text-gold text-xl tracking-wide hover:opacity-80 transition-opacity">
            Valoré Essentials
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-[0.68rem] tracking-[0.2em] uppercase font-medium transition-colors duration-200',
                  pathname === href ? 'text-gold' : 'text-cream/60 hover:text-cream'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              className="relative text-cream/60 hover:text-gold transition-colors p-1"
              aria-label={`Cart, ${count} items`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-primary text-[0.55rem] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-[5px] p-1"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              <span className={cn('w-5 h-[1.5px] bg-cream transition-all duration-300', mobileOpen && 'rotate-45 translate-y-[6.5px]')} />
              <span className={cn('w-5 h-[1.5px] bg-cream transition-all duration-300', mobileOpen && 'opacity-0')} />
              <span className={cn('w-5 h-[1.5px] bg-cream transition-all duration-300', mobileOpen && '-rotate-45 -translate-y-[6.5px]')} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-secondary flex flex-col items-center justify-center gap-8 transition-transform duration-400 md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'font-serif text-3xl italic transition-colors',
              pathname === href ? 'text-gold' : 'text-cream hover:text-gold'
            )}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}

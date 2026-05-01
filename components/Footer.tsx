'use client';
import Link from 'next/link';
import { useState } from 'react';

const LINKS = {
  Shop: [
    { href: '/shop', label: 'All Kits' },
    { href: '/shop/her', label: 'For Her' },
    { href: '/shop/him', label: 'For Him' },
    { href: '/shop', label: 'Gift Sets' },
  ],
  Help: [
    { href: '/contact', label: 'Contact Us' },
    { href: '/contact', label: 'Shipping Info' },
    { href: '/contact', label: 'Returns' },
    { href: '/contact', label: 'FAQ' },
  ],
  Brand: [
    { href: '/about', label: 'Our Story' },
    { href: '/about', label: 'Values' },
    { href: '/contact', label: 'Press' },
    { href: '/contact', label: 'Wholesale' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subbed, setSubbed] = useState(false);

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) { setSubbed(true); setEmail(''); }
  };

  return (
    <footer className="bg-secondary border-t border-gold/10 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter */}
        <div className="border border-gold/15 rounded-sm p-8 mb-14 text-center bg-primary/30">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3">Join the Inner Circle</p>
          <h3 className="font-serif text-2xl italic mb-2">First Access. Always.</h3>
          <p className="text-cream/50 text-sm mb-6">New drops, exclusive offers, and travel inspo — straight to your inbox.</p>
          {subbed ? (
            <p className="text-gold text-sm">✦ You&apos;re in! Welcome to the circle.</p>
          ) : (
            <form onSubmit={handleSub} className="flex max-w-sm mx-auto gap-0">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="youremail@here.com"
                required
                className="flex-1 bg-primary border border-gold/20 border-r-0 text-cream text-sm px-4 py-3 rounded-l-sm focus:outline-none focus:border-gold/50 placeholder:text-cream/30"
              />
              <button
                type="submit"
                className="bg-gold text-primary text-[0.7rem] tracking-[0.15em] uppercase font-medium px-5 py-3 rounded-r-sm hover:bg-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-serif italic text-gold text-xl block mb-4">Valoré Essentials</Link>
            <p className="text-cream/50 text-sm leading-relaxed max-w-[220px]">Curated essentials for the modern traveler. Feel prepared, put-together, anywhere.</p>
            <div className="flex gap-3 mt-5">
              {['IG','TT','PT'].map(s => (
                <a key={s} href="#" className="w-8 h-8 border border-gold/20 rounded-sm flex items-center justify-center text-cream/40 hover:border-gold hover:text-gold transition-colors text-[0.65rem] font-medium">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-4 font-medium">{title}</p>
              <ul className="space-y-2">
                {items.map(({ href, label }) => (
                  <li key={label}>
                    <Link href={href} className="text-cream/50 text-sm hover:text-cream transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gold/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/30 text-xs">© 2025 Valoré Essentials. All rights reserved.</p>
          <p className="text-cream/30 text-xs">Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

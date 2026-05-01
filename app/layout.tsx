import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/lib/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: { default: 'Valoré Essentials — Curated Kits for You On The Go', template: '%s | Valoré Essentials' },
  description: 'Premium travel essential kits crafted for the modern traveler. Feel prepared, put-together, and effortlessly confident anywhere.',
  keywords: ['travel kits', 'luxury essentials', 'travel organizer', 'premium kits'],
  openGraph: {
    title: 'Valoré Essentials',
    description: 'Curated kits for the modern traveler.',
    type: 'website'
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%230B0B0D"/><text y=".9em" font-size="80" x="10" fill="%23C6A96B" font-family="Georgia,serif">V</text></svg>',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-primary text-cream font-sans antialiased">
        <CartProvider>
          <div className="noise-overlay" aria-hidden="true" />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

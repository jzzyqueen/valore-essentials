import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-[70px] min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-serif text-[12rem] leading-none text-secondary select-none">404</p>
      <p className="font-serif text-4xl italic text-cream -mt-12 mb-4">Page not found</p>
      <p className="text-cream/40 text-sm mb-8 max-w-xs">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="bg-gold text-primary px-8 py-3.5 text-[0.7rem] tracking-[0.18em] uppercase font-medium hover:bg-gold/90 transition-colors rounded-sm">
        Back to Home
      </Link>
    </div>
  );
}

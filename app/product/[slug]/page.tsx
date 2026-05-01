import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/products';
import ProductPageClient from './ProductPageClient';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS.find(p => p.slug === params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.desc,
    openGraph: { title: product.name, description: product.desc, images: [product.img] },
  };
}

export default function ProductPage({ params }: Props) {
  const product = PRODUCTS.find(p => p.slug === params.slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.category === 'both')).slice(0, 3);

  return <ProductPageClient product={product} related={related} />;
}

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: 'her' | 'him' | 'both';
  tag: string;
  badge: 'her' | 'him' | 'unisex' | 'bestseller';
  badgeLabel: string;
  price: number;
  img: string;
  images: string[];
  desc: string;
  inside: string[];
  benefit: string;
  colors: string[];
  rating: number;
  reviews: number;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: 'eclat-kit',
    name: 'Éclat Kit',
    category: 'her',
    tag: 'Beauty / Glow',
    badge: 'her',
    badgeLabel: 'For Her',
    price: 89,
    img: 'https://via.placeholder.com/600x600/1A1A1D/D4A5A5?text=Éclat+Kit',
    images: [
      'https://via.placeholder.com/600x600/1A1A1D/D4A5A5?text=Éclat+Kit',
      'https://via.placeholder.com/600x600/242428/D4A5A5?text=Inside+View',
      'https://via.placeholder.com/600x600/1A1A1D/C6A96B?text=Detail+Shot',
    ],
    desc: 'Makeup essentials and glow tools curated in an iconic sleek case — your radiance, packed.',
    inside: ['Illuminating primer drops', 'Mini mascara', 'Rose-gold lip gloss', 'Blotting papers (30 sheets)', 'Travel brush set', 'Glow-up mist spray', 'Valoré Signature Pouch'],
    benefit: 'Stay radiant from runway to red-eye.',
    colors: ['#D4A5A5', '#8B6F7A', '#C6A96B'],
    rating: 4.9,
    reviews: 214,
  },
  {
    id: 2,
    slug: 'reset-kit',
    name: 'The Reset Kit',
    category: 'her',
    tag: 'Hygiene / Refresh',
    badge: 'her',
    badgeLabel: 'For Her',
    price: 69,
    img: 'https://via.placeholder.com/600x600/1A1A1D/8B6F7A?text=Reset+Kit',
    images: [
      'https://via.placeholder.com/600x600/1A1A1D/8B6F7A?text=Reset+Kit',
      'https://via.placeholder.com/600x600/242428/8B6F7A?text=Inside+View',
      'https://via.placeholder.com/600x600/1A1A1D/C6A96B?text=Detail+Shot',
    ],
    desc: 'Travel-sized cleansers, wipes, and mints for instant freshness — reset anywhere.',
    inside: ['Micellar cleansing wipes', 'Travel toothbrush + paste', 'Spearmint mints', 'Hand sanitizer gel', 'Facial mist', 'Floss picks', 'Valoré Signature Pouch'],
    benefit: 'Reset anywhere in under 5 minutes.',
    colors: ['#8B6F7A', '#D4A5A5', '#F5F1EB'],
    rating: 4.8,
    reviews: 187,
  },
  {
    id: 3,
    slug: 'cloud-nine-kit',
    name: 'Cloud Nine Kit',
    category: 'her',
    tag: 'Comfort / Sleep',
    badge: 'bestseller',
    badgeLabel: 'Best Seller',
    price: 79,
    img: 'https://via.placeholder.com/600x600/242428/C6A96B?text=Cloud+Nine+Kit',
    images: [
      'https://via.placeholder.com/600x600/242428/C6A96B?text=Cloud+Nine+Kit',
      'https://via.placeholder.com/600x600/1A1A1D/C6A96B?text=Inside+View',
      'https://via.placeholder.com/600x600/242428/D4A5A5?text=Detail+Shot',
    ],
    desc: 'Eye mask, earplugs, pillow mist, and neck support — sleep like you\'re already there.',
    inside: ['Silk eye mask', 'Foam earplugs', 'Lavender pillow mist', 'Plush neck support', 'Cozy socks', 'Sleep playlist card', 'Valoré Signature Pouch'],
    benefit: 'Wake up refreshed, wherever you land.',
    colors: ['#C6A96B', '#F5F1EB', '#5C3B5E'],
    rating: 5.0,
    reviews: 302,
  },
  {
    id: 4,
    slug: 'always-ready-kit',
    name: 'Always Ready Kit',
    category: 'both',
    tag: 'Emergency / Safety',
    badge: 'unisex',
    badgeLabel: 'Unisex',
    price: 74,
    img: 'https://via.placeholder.com/600x600/1A1A1D/C6A96B?text=Always+Ready',
    images: [
      'https://via.placeholder.com/600x600/1A1A1D/C6A96B?text=Always+Ready',
      'https://via.placeholder.com/600x600/242428/C6A96B?text=Inside+View',
      'https://via.placeholder.com/600x600/1A1A1D/6B7280?text=Detail+Shot',
    ],
    desc: 'Bandages, meds, multi-tool, and backup charger — because nothing should stop you.',
    inside: ['Compact first aid set', 'Pain relief tablets', 'Antacid strips', 'Steel multi-tool', 'Backup charger (3000mAh)', 'Emergency contact card', 'Valoré Signature Pouch'],
    benefit: 'Because nothing should stop you.',
    colors: ['#C6A96B', '#6B7280', '#1E3A5F'],
    rating: 4.9,
    reviews: 276,
  },
  {
    id: 5,
    slug: 'daily-kit',
    name: 'The Daily Kit',
    category: 'him',
    tag: 'Essentials / Daily',
    badge: 'him',
    badgeLabel: 'For Him',
    price: 84,
    img: 'https://via.placeholder.com/600x600/1E3A5F/C6A96B?text=Daily+Kit',
    images: [
      'https://via.placeholder.com/600x600/1E3A5F/C6A96B?text=Daily+Kit',
      'https://via.placeholder.com/600x600/242428/1E3A5F?text=Inside+View',
      'https://via.placeholder.com/600x600/1A1A1D/C6A96B?text=Detail+Shot',
    ],
    desc: 'A refined daily carry — grooming, tech, and essentials structured for the man who moves with intention.',
    inside: ['Travel razor + blade', 'Mini cologne vial', 'Charcoal face wash', 'Deodorant stick (travel)', 'Universal USB-C cable', 'Compact power bank', 'Valoré Signature Pouch'],
    benefit: 'Groomed. Connected. Ready.',
    colors: ['#1E3A5F', '#6B7280', '#C6A96B'],
    rating: 4.8,
    reviews: 143,
  },
  {
    id: 6,
    slug: 'travel-kit',
    name: 'The Travel Kit',
    category: 'him',
    tag: 'Tech / Travel',
    badge: 'him',
    badgeLabel: 'For Him',
    price: 99,
    img: 'https://via.placeholder.com/600x600/2D4A3A/C6A96B?text=Travel+Kit',
    images: [
      'https://via.placeholder.com/600x600/2D4A3A/C6A96B?text=Travel+Kit',
      'https://via.placeholder.com/600x600/242428/2D4A3A?text=Inside+View',
      'https://via.placeholder.com/600x600/1A1A1D/C6A96B?text=Detail+Shot',
    ],
    desc: 'Cables, adapters, notebook — organized in a sleek leather roll. Stay connected, always.',
    inside: ['Universal USB-C & Lightning cables', 'Multi-region power adapter', 'Mini power bank (5000mAh)', 'A6 matte notebook', 'Precision pen', 'Cord management roll', 'Valoré Signature Pouch'],
    benefit: 'Charge. Create. Arrive connected.',
    colors: ['#2D4A3A', '#1E3A5F', '#C6A96B'],
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 7,
    slug: 'signature-pouch',
    name: 'Valoré Signature Pouch',
    category: 'both',
    tag: 'Core / Organizer',
    badge: 'unisex',
    badgeLabel: 'Core Kit',
    price: 59,
    img: 'https://via.placeholder.com/600x600/242428/C6A96B?text=Signature+Pouch',
    images: [
      'https://via.placeholder.com/600x600/242428/C6A96B?text=Signature+Pouch',
      'https://via.placeholder.com/600x600/1A1A1D/C6A96B?text=Inside+View',
      'https://via.placeholder.com/600x600/242428/D4A5A5?text=Detail+Shot',
    ],
    desc: 'The iconic customizable organizer pouch included with every Valoré kit. Premium. Timeless.',
    inside: ['Premium vegan leather body', 'Gold zipper pulls', '3 internal pockets', 'Key ring hook', 'Monogram patch option', 'Available in 4 colorways'],
    benefit: 'The foundation of every Valoré ritual.',
    colors: ['#C6A96B', '#1A1A1D', '#D4A5A5', '#1E3A5F'],
    rating: 4.9,
    reviews: 512,
  },
];

export const HER_PRODUCTS = PRODUCTS.filter(p => p.category === 'her' || p.category === 'both');
export const HIM_PRODUCTS = PRODUCTS.filter(p => p.category === 'him' || p.category === 'both');

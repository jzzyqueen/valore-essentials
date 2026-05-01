# Valore Essentials

Premium travel essential kits for you on the go. Built with Next.js 14, Tailwind CSS, TypeScript.

## Stack
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Language: TypeScript
- Cart: localStorage (Stripe-ready)

## Quick Start

npm install
npm run dev

## Deploy to Vercel

npm i -g vercel
vercel login
vercel --prod

Or push to GitHub and import at vercel.com/new

## Customization
- Products: lib/products.ts
- Colors: tailwind.config.js
- Real images: public/images/
- Stripe: create lib/stripe.ts

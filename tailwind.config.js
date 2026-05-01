/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#0B0B0D',
        secondary: '#1A1A1D',
        charcoal:  '#242428',
        cream:     '#F5F1EB',
        'cream-dim': 'rgba(245,241,235,0.6)',
        gold:      '#C6A96B',
        'gold-dim': 'rgba(198,169,107,0.15)',
        rose:      '#D4A5A5',
        mauve:     '#8B6F7A',
        plum:      '#5C3B5E',
        navy:      '#1E3A5F',
        forest:    '#2D4A3A',
        steel:     '#6B7280',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'float':   'float 6s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 80% at 70% 50%, rgba(198,169,107,0.07) 0%, transparent 60%), linear-gradient(160deg, #0B0B0D 0%, #1A1A1D 100%)',
        'gold-glow': 'radial-gradient(circle, rgba(198,169,107,0.25) 0%, transparent 70%)',
      },
      boxShadow: {
        'gold': '0 0 30px rgba(198,169,107,0.25)',
        'card': '0 20px 60px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};

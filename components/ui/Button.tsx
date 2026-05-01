import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

type Variant = 'gold' | 'outline' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
}

const variants: Record<Variant, string> = {
  gold:    'bg-gold text-primary hover:bg-gold/90 border border-gold',
  outline: 'bg-transparent border border-gold/30 text-cream hover:border-gold hover:text-gold',
  ghost:   'bg-transparent text-cream/60 hover:text-cream',
};

const sizes = {
  sm: 'px-4 py-2 text-[0.65rem] tracking-[0.15em]',
  md: 'px-6 py-3 text-[0.7rem] tracking-[0.18em]',
  lg: 'px-8 py-4 text-[0.72rem] tracking-[0.2em]',
};

export function Button({ variant = 'gold', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 uppercase font-medium font-sans transition-all duration-200 rounded-sm',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

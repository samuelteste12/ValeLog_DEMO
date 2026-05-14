import React from 'react';
import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';
import { cn } from './ui/Button';

type BrandMarkProps = {
  /** Fundo verde escuro (navbar) */
  variant?: 'onPrimary' | 'onLight';
  className?: string;
  asLink?: boolean;
};

export function BrandMark({ variant = 'onPrimary', className, asLink = true }: BrandMarkProps) {
  const isOnPrimary = variant === 'onPrimary';

  const inner = (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 min-h-[3rem] md:min-h-[3.5rem]',
        className
      )}
    >
      <span
        className={cn(
          'flex h-11 w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl',
          isOnPrimary ? 'bg-brand-accent text-white' : 'bg-brand-accent text-white'
        )}
        aria-hidden
      >
        <Truck className="h-6 w-6" strokeWidth={2} />
      </span>
      <span
        className={cn(
          'font-display font-bold tracking-tight text-xl md:text-2xl leading-none',
          isOnPrimary ? 'text-white' : 'text-brand-primary'
        )}
      >
        Vale <span className={isOnPrimary ? 'text-emerald-200' : 'text-brand-accent'}>Log</span>
      </span>
    </span>
  );

  if (asLink) {
    return (
      <Link to="/" className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded-lg">
        {inner}
      </Link>
    );
  }

  return inner;
}

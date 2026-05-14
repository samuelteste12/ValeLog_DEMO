import React from 'react';
import { cn } from './ui/Button';

/** Fundo institucional quando não há foto real — gradiente + textura leve */
export function HeroTexture({
  className,
  variant = 'light',
}: {
  className?: string;
  variant?: 'light' | 'dark';
}) {
  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden',
        variant === 'light'
          ? 'bg-gradient-to-br from-brand-light via-emerald-50/80 to-white'
          : 'bg-gradient-to-br from-brand-primary via-[#1e3324] to-brand-primary',
        className
      )}
      aria-hidden
    >
      <div
        className={cn(
          'absolute -right-20 -top-20 h-96 w-96 rounded-full blur-3xl opacity-40',
          variant === 'light' ? 'bg-brand-accent/25' : 'bg-brand-accent/20'
        )}
      />
      <div
        className={cn(
          'absolute -bottom-24 -left-16 h-80 w-80 rounded-full blur-3xl opacity-30',
          variant === 'light' ? 'bg-emerald-200/50' : 'bg-white/10'
        )}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2325412A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

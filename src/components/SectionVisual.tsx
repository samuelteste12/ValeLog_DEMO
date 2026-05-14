import React from 'react';
import { cn } from './ui/Button';
import type { LucideIcon } from 'lucide-react';

type SectionVisualProps = {
  icon: LucideIcon;
  label?: string;
  className?: string;
  /** Proporção do bloco */
  aspect?: 'square' | 'video';
};

export function SectionVisual({
  icon: Icon,
  label,
  className,
  aspect = 'square',
}: SectionVisualProps) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-3xl border border-gray-200/80 shadow-md ring-1 ring-black/[0.04]',
        aspect === 'square' ? 'aspect-square' : 'aspect-video',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-[#2d4a35] to-brand-accent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.14),transparent_55%)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center text-white sm:p-8">
        <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-2xl bg-white/12 ring-1 ring-white/25 backdrop-blur-[2px] sm:h-24 sm:w-24">
          <Icon className="h-11 w-11 text-emerald-50 sm:h-12 sm:w-12" strokeWidth={1.15} aria-hidden />
        </div>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85 sm:text-[11px]">
          Demonstração visual
        </span>
        {label ? (
          <p className="max-w-sm text-xs font-medium leading-relaxed text-white/90 sm:text-sm">{label}</p>
        ) : null}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" aria-hidden />
    </div>
  );
}

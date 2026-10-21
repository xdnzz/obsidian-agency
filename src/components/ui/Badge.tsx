import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase transition-colors',
  {
    variants: {
      variant: {
        radiant: 'bg-white/[0.04] border border-white/10 text-slate-200 shadow-inner shadow-white/5',
        glow: 'bg-violet-500/10 border border-violet-500/30 text-violet-300',
        emerald: 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400',
        glass: 'bg-slate-900/60 border border-white/5 text-slate-400 backdrop-blur-md',
      },
    },
    defaultVariants: {
      variant: 'radiant',
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  withPulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant,
  withPulse = false,
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {withPulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      )}
      {children}
    </div>
  );
};
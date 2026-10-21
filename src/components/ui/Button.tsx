import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
  {
    variants: {
      variant: {
        radiant:
          'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 text-white shadow-lg shadow-violet-600/30 hover:opacity-95',
        glass:
          'bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 backdrop-blur-md',
        outline:
          'border border-slate-800 hover:border-slate-700 bg-transparent text-slate-300 hover:text-white',
        ghost: 'text-slate-400 hover:text-white hover:bg-white/5',
      },
      size: {
        sm: 'text-xs px-3.5 py-1.5 h-8',
        md: 'text-xs sm:text-sm px-5 py-2.5 h-10',
        lg: 'text-sm sm:text-base px-7 py-3 h-12',
      },
    },
    defaultVariants: {
      variant: 'radiant',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading = false, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
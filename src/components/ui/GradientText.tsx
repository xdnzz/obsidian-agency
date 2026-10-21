import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'radiant' | 'violet' | 'cyan' | 'fuchsia';
}

const variantStyles = {
  radiant: 'from-violet-400 via-fuchsia-400 to-cyan-300',
  violet: 'from-violet-300 via-indigo-300 to-purple-400',
  cyan: 'from-cyan-300 via-teal-300 to-blue-400',
  fuchsia: 'from-fuchsia-300 via-pink-400 to-rose-400',
};

export const GradientText: React.FC<GradientTextProps> = ({
  variant = 'radiant',
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent inline-block font-bold',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
import React from 'react';
import { cn } from '@/lib/utils';

interface AmbientGlowProps {
  color?: 'violet' | 'cyan' | 'fuchsia';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const colorStyles = {
  violet: 'from-violet-600/30 via-fuchsia-600/20 to-transparent',
  cyan: 'from-cyan-500/25 via-blue-600/20 to-transparent',
  fuchsia: 'from-fuchsia-600/30 via-pink-600/20 to-transparent',
};

const sizeStyles = {
  sm: 'w-[300px] h-[200px] blur-[90px]',
  md: 'w-[500px] h-[350px] blur-[120px]',
  lg: 'w-[750px] h-[450px] blur-[140px]',
};

export const AmbientGlow: React.FC<AmbientGlowProps> = ({
  color = 'violet',
  size = 'md',
  className,
}) => {
  return (
    <div
      className={cn(
        'absolute rounded-full bg-gradient-to-tr ambient-glow pointer-events-none -z-10',
        colorStyles[color],
        sizeStyles[size],
        className
      )}
    />
  );
};
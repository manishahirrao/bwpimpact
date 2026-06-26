'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'navy' | 'ghost-navy' | 'ghost-white';
  size?: 'default' | 'sm' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

/**
 * PrimaryButton Component
 * Apple-inspired button with 4 variants following BWP IMPACT design system
 * Implements subtle scale animations and loading states
 */
const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  (
    {
      className,
      variant = 'gold',
      size = 'default',
      isLoading = false,
      icon,
      iconPosition = 'right',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      // Base styles - Apple pill button
      'inline-flex items-center justify-center gap-2',
      'font-semibold rounded-full',
      'transition-all duration-base ease-default',
      'focus:outline-none focus:ring-2 focus:ring-gold-primary focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      // Hover effects - subtle scale
      'hover:scale-[1.015] active:scale-[0.98]',
      // Letter spacing
      'tracking-[0.01em]'
    );

    const variantStyles = {
      gold: 'bg-gold-primary text-white hover:bg-gold-warm hover:shadow-gold',
      navy: 'bg-navy-primary text-white hover:bg-navy-medium',
      'ghost-navy': 'bg-transparent text-navy-primary border-[1.5px] border-navy-primary hover:bg-navy-light',
      'ghost-white': 'bg-transparent text-white border-[1.5px] border-white hover:bg-white/10',
    };

    const sizeStyles = {
      sm: 'min-h-[36px] py-2 px-5 text-sm',
      default: 'min-h-[52px] py-3 px-7 text-base',
      lg: 'min-h-[56px] py-3 px-8 text-md',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-[18px] w-[18px] animate-spin" />
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <span className="inline-flex">{icon}</span>
            )}
            {children}
            {icon && iconPosition === 'right' && (
              <span className="inline-flex">{icon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;

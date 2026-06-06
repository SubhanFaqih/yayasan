// File: src/components/ui/Button.jsx
import { cn } from '@/lib/utils';

const variants = {
  primary:
    'bg-[#1A6B3A] text-white hover:bg-[#2E9E5B] border border-[#1A6B3A] hover:border-[#2E9E5B] shadow-sm',
  outline:
    'bg-transparent text-[#1A6B3A] border border-[#1A6B3A] hover:bg-[#1A6B3A] hover:text-white',
  ghost:
    'bg-transparent text-[#1A6B3A] border border-transparent hover:bg-[#EFF7F2]',
  'outline-white':
    'bg-transparent text-white border border-white hover:bg-white hover:text-[#1A6B3A]',
  danger:
    'bg-red-600 text-white hover:bg-red-700 border border-red-600',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

/**
 * Reusable Button component.
 * @param {'primary'|'outline'|'ghost'|'outline-white'|'danger'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} loading
 * @param {boolean} fullWidth
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold',
        'transition-all duration-200 ease-in-out cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A6B3A] focus-visible:ring-offset-2',
        'disabled:opacity-60 disabled:cursor-not-allowed',
        variants[variant] ?? variants.primary,
        sizes[size] ?? sizes.md,
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}

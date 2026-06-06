// File: src/lib/utils.js
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names using clsx and tailwind-merge.
 * Eliminates duplicate/conflicting Tailwind classes.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

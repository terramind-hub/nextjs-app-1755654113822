import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Safely formats a number with proper null/undefined handling
 * @param value - The number to format
 * @param fallback - Fallback value if input is invalid (default: 0)
 * @returns Formatted number string
 */
export function formatNumber(value: number | null | undefined, fallback: number = 0): string {
  const safeValue = Number.isFinite(value as number) ? (value as number) : fallback
  return new Intl.NumberFormat('en-US').format(safeValue)
}

/**
 * Safely formats a percentage with proper null/undefined handling
 * @param value - The percentage value (0-100)
 * @param decimals - Number of decimal places (default: 1)
 * @param fallback - Fallback value if input is invalid (default: 0)
 * @returns Formatted percentage string
 */
export function formatPercentage(value: number | null | undefined, decimals: number = 1, fallback: number = 0): string {
  const safeValue = Number.isFinite(value as number) ? (value as number) : fallback
  // Clamp percentage to [0, 100] range
  const clampedValue = Math.max(0, Math.min(100, safeValue))
  return `${clampedValue.toFixed(decimals)}%`
}
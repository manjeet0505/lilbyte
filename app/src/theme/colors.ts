/**
 * LilByte App – Design Tokens
 * Matches the website's dark-mode color system
 */

export const Colors = {
  background: '#05070E',
  foreground: '#E2E8F0',
  muted: '#94A3B8',
  card: '#0F172A',
  surface: '#0B1220',
  border: '#1E293B',
  primary: '#3B82F6',
  primaryForeground: '#05070E',
  cyan: '#22D3EE',
  sky: '#38BDF8',
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  white: '#FFFFFF',
  transparent: 'transparent',
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

export const FontSize = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 17,
  xl: 20,
  xxl: 26,
  xxxl: 34,
  hero: 42,
} as const;

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export type ColorKey = keyof typeof Colors;

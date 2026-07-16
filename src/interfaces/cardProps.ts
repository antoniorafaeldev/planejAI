import type { LucideIcon } from 'lucide-react';

export interface CardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subtitle: string;
  variant?: 'default' | 'primary';
}

import type { LucideIcon } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'ghost';
  icon?: LucideIcon;
}

import type { ThemeContextValue } from '@/interfaces/themeContext';
import { createContext } from 'react';

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

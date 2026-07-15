import type { LucideIcon } from 'lucide-react';
import type { InputProps } from './inputProps';

export interface FormStepProps {
  icon: LucideIcon;
  title: string;
  question: string;
  inputProps: InputProps;
  submitButtonProps?: {
    label: string;
    emojiIcon?: string;
  };
}

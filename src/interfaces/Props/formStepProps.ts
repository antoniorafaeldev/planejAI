import type { LucideIcon } from 'lucide-react';
import type { InputProps } from './inputProps';

export interface FormStepProps {
  id: string;
  icon: LucideIcon;
  title: string;
  question: string;
  inputProps: InputProps;
  submitButtonProps?: {
    label: string;
    emojiIcon?: string;
  };
}

export interface actionsButtonsProps {
  onPrev: () => void;
  onNext: (value: string) => void;
  hidden?: boolean;
}

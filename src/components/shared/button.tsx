import type { ButtonsProps } from '@/interfaces/Props/buttonProps';

const baseClasses: string =
  'flex cursor-pointer items-center justify-center font-medium text-sm gap-2 px-4 py-3 transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-80';

const variantClasses = {
  primary: 'bg-primary text-primary-foreground font-semibold rounded-xl',
  secondary: 'bg-secondary-button border border-border rounded-3xl',
  ghost: 'rounded-lg text-foreground',
};

export function Button({
  variant,
  icon: Icon,
  children,
  className,
  ...props
}: ButtonsProps) {
  return (
    <button
      {...props}
      className={[baseClasses, variantClasses[variant], className].join(' ')}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
}

import type { PropsWithChildren } from 'react';
import { cn } from '../utils';

type Variant = 'primary' | 'secondary' | 'translucent';

type Props = {
  className?: string;
  variant?: Variant;
};

export function GradientCard({
  children,
  className,
  variant = 'primary',
}: PropsWithChildren<Props>) {
  const variantClasses = {
    primary: 'bg-linear-white before:bg-linear-gray backdrop-blur-[70.5px]',
    secondary:
      'bg-linear-black-pink before:bg-linear-gray backdrop-blur-[70.5px]',
    translucent: 'bg-linear-purple-gray before:bg-linear-gray',
  };

  return (
    <div
      className={cn(
        "mask-effect relative rounded-xl before:absolute before:inset-0 before:-z-50 before:rounded-xl before:p-[2px] before:content-['']",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}

import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum width of the container
   * sm: max-w-screen-sm (640px)
   * md: max-w-screen-md (768px)
   * lg: max-w-screen-lg (1024px)
   * xl: max-w-screen-xl (1280px)
   * full: max-w-full
   */
  size?: ContainerSize;
  /**
   * Whether to center the container horizontally
   */
  centered?: boolean;
  /**
   * Whether to add default padding
   */
  padded?: boolean;
}

export function Container({
  children,
  className,
  size = 'lg',
  centered = true,
  padded = true,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        {
          'sm:max-w-screen-sm': size === 'sm',
          'sm:max-w-screen-md': size === 'md',
          'sm:max-w-screen-lg': size === 'lg',
          'sm:max-w-screen-xl': size === 'xl',
          'max-w-full': size === 'full',
          'mx-auto': centered,
          'px-4 sm:px-6 lg:px-8': padded,
        },
        'w-full',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

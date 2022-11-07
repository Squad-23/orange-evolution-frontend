import cn from 'classnames';
import type { ReactNode, BaseHTMLAttributes } from 'react';

interface TextProps extends BaseHTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Text({ children, size, className, ...props }: TextProps) {
  return (
    <span
      {...props}
      className={cn(
        'text-contrast-200 text-center',
        {
          'text-base': size === 'md',
          'text-xs': size === 'sm',
          'text-lg': size === 'lg',
        },
        className,
      )}
    >
      {children}
    </span>
  );
}

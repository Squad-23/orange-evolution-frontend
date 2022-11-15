import cn from 'classnames';
import type { BaseHTMLAttributes } from 'react';
import { HiExternalLink } from 'react-icons/hi';

function Root({ className, children }: BaseHTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-4 text-contrast-200 h-full', className)}>{children}</div>;
}

function Title({ children, className }: BaseHTMLAttributes<HTMLBaseElement>) {
  return <h2 className={cn('text-3xl', className)}>{children}</h2>;
}

function Resume({ children, className }: BaseHTMLAttributes<HTMLBaseElement>) {
  return <p className={cn(className)}>{children}</p>;
}

function External({ className }: BaseHTMLAttributes<HTMLBaseElement>) {
  return (
    <a
      href="www.google.com"
      className={cn(
        'bg-brand-green px-4 py-2 flex gap-2 items-center rounded-2xl justify-center hover:bg-teal-600 text-gray-light-100',
        className,
      )}
    >
      Continuar lendo
      <HiExternalLink />
    </a>
  );
}

interface GlossaryProps extends BaseHTMLAttributes<HTMLDivElement> {
  items: {
    title: string;
    description: string;
  }[];
}

function Glossary({ items, ...props }: GlossaryProps) {
  return (
    <div {...props}>
      <h4 className="text-lg font-semibold">Glossário</h4>

      <ul className="mt-2 flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={`item_${String(index)}`}>
            <span className="text-blue-400">{item.title}</span> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export const Content = {
  Root,
  Title,
  Resume,
  External,
  Glossary,
};

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

function External({ className, href }: BaseHTMLAttributes<HTMLBaseElement>) {
  if (href?.includes('youtube')) {
    const videoId = href
      .split('?')[1]
      .split('&')
      .find((q) => q.includes('v='))
      ?.replace('v=', '');

    if (videoId) {
      return (
        <iframe
          className="w-full aspect-video rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
  }
  return (
    <a
      href={href ?? '/'}
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

function Glossary({ children }: BaseHTMLAttributes<HTMLDivElement>) {
  return (
    <div>
      <h4 className="text-lg font-semibold">Glossário</h4>

      <p className="mt-2 flex flex-col gap-2">{children}</p>
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

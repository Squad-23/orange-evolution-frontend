import type { PropsWithChildren } from 'react';

import { Menu } from './Menu';

function Content({ children }: PropsWithChildren) {
  return (
    <section className="relative w-screen z-0 bg-dominant-200">
      <div
        className="
        absolute w-full h-full opacity-30 z-[-1]
        bg-gradient-to-r from-brand-pink-100 to-[#D5FFAB]
        dark:bg-gradient-to-l dark:to-brand-cyan
      "
      />
      {children}
    </section>
  );
}

function Root({ children }: PropsWithChildren) {
  return (
    <div className="bg-dominant-200 w-full h-full flex flex-col pt-20">
      <Menu />
      {children}
    </div>
  );
}

export const Page = {
  Root,
  Content,
};

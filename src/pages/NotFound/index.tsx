import { Link } from 'react-router-dom';

import { Page } from '../../components/Page';

export function NotFound() {
  return (
    <Page.Root>
      <Page.Content>
        <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center">
          <h1 className="text-contrast-200 text-3xl font-black">Página não encontrada :/</h1>
          <Link to="/" className="bg-brand-cyan px-8 py-2 rounded text-gray-light-100">
            Ir para a Página Inicial
          </Link>
        </div>
      </Page.Content>
    </Page.Root>
  );
}

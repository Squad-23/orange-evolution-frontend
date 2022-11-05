import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="bg-dominant-200 w-screen h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-contrast-200 text-3xl font-black">Página não encontrada :/</h1>
      <Link to="/" className="bg-primary-500 px-8 py-2 rounded text-gray-light-100">
        Ir para a Página Inicial
      </Link>
    </div>
  );
}

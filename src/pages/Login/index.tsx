import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="bg-indigo-900 w-screen h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-white text-3xl font-black">Página de Login</h1>
      <Link to="/" className="bg-slate-900 px-8 py-2 rounded text-white">
        Trocar de página
      </Link>
    </div>
  );
}

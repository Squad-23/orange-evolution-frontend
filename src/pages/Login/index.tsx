import { Link } from 'react-router-dom';

import { ThemeSwitcher } from '../../components/ThemeSwitch';





export function Login() {
  return (
    <div className="bg-dominant-200 w-screen h-screen flex flex-col gap-4 items-center justify-center">
      <ThemeSwitcher />
      <h1 className="text-contrast-200 text-3xl font-black">Login</h1>
      <Link to="/login" className="bg-primary-500 px-8 py-2 rounded text-gray-light-100">
        Trocar de página
      </Link>
    </div>
  );
}

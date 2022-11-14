import { Link } from 'react-router-dom';

import { OrangeTrail } from '../../assets/svgs/OrangeTrail';
import { Page } from '../../components/Page';
import { ThemeSwitcher } from '../../components/ThemeSwitch';

export function Landing() {
  return (
    <Page.Content>
      <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center">
        <ThemeSwitcher />
        <OrangeTrail />
        <h1 className="text-contrast-200 text-3xl font-black">Landing / Home</h1>
        <Link to="/login" className="bg-brand-orange-500 px-8 py-2 rounded text-gray-light-100">
          Trocar de página
        </Link>
      </div>
    </Page.Content>
  );
}

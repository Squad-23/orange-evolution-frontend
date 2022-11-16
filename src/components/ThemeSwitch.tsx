import * as Switch from '@radix-ui/react-switch';
import { useContext } from 'react';

import { ThemeContext } from '../contexts/theme';

export function ThemeSwitcher() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <Switch.Root className="bg-gray-500 w-12 h-6 rounded-full p-1 shadow-md" onCheckedChange={toggleTheme}>
      <Switch.Thumb
        className={`bg-white h-full aspect-square block rounded-full left-0 transition-transform ${
          theme === 'dark' ? 'translate-x-6' : ''
        }`}
      />
    </Switch.Root>
  );
}

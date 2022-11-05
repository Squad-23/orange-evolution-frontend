import type { PropsWithChildren } from 'react';
import { useMemo, useState, createContext } from 'react';

const [dark, light] = ['dark', 'light'];

type ThemeContextProps = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: light,
  toggleTheme: () => {},
});

export function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<string>(
    window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.theme === 'dark' ? dark : light,
  );

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((prev) => (prev === light ? dark : light)),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

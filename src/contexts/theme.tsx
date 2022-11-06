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
  const isUserThemePreferenceDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const localTheme = localStorage.theme as string | undefined;

  const [theme, setTheme] = useState<string>(
    (localTheme ? localTheme === 'dark' : isUserThemePreferenceDark) ? dark : light,
  );

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((prev) => {
          if (prev === light) {
            localStorage.theme = 'dark';
            return dark;
          }
          localStorage.theme = 'light';
          return light;
        }),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

export const themes = ["light", "dark", "system"] as const;
export type Theme = (typeof themes)[number];
type ThemeContextValues = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const DEFAULT_THEME = themes[2];
const STORAGE_KEY = "reactgpt.theme";

const ThemeContext = createContext<ThemeContextValues>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(STORAGE_KEY) as Theme) || DEFAULT_THEME
  );

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (theme: Theme) => {
          localStorage.setItem(STORAGE_KEY, theme);
          setTheme(theme);
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

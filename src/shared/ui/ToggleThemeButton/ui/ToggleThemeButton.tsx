import { useTheme } from "@/app/providers/ThemeProvider";

import ThemeDark from "@/shared/assets/theme-dark.svg?react";
import ThemeLight from "@/shared/assets/theme-light.svg?react";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <ThemeLight /> : <ThemeDark />}
    </button>
  );
};

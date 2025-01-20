import { useTheme } from "@/app/providers/ThemeProvider";

import ThemeDark from "@/shared/assets/theme-dark.svg";
import ThemeLight from "@/shared/assets/theme-light.svg";

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <ThemeLight /> : <ThemeDark />}
    </button>
  );
};

export default ToggleThemeButton;

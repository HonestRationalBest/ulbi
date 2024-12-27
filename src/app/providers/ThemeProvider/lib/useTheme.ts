import { useContext } from "react";
import { ThemeContext } from "../ui/ThemeContext";

interface useThemeType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const useTheme = (): useThemeType => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
};

import { Link } from "react-router-dom";
import { useTheme } from "@/app/providers/ThemeProvider/lib/useTheme";

export const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </nav>
  );
};

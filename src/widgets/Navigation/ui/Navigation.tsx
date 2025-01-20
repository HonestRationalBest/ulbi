import { Link } from "react-router-dom";
import ToggleThemeButton from "@/widgets/ToglleThemeButton/ui/ToggleThemeButton";

export const Navigation: React.FC = () => {
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
    </nav>
  );
};

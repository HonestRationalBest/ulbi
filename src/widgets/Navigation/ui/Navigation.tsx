import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{t("navigation.main")}</Link>
        </li>
        <li>
          <Link to="/about">{t("navigation.about")}</Link>
        </li>
      </ul>
    </nav>
  );
};

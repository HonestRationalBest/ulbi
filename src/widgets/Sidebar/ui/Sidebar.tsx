import { FC, useState } from "react";
import * as styles from "./Sidebar.module.scss";
import ToggleThemeButton from "@/widgets/ToglleThemeButton/ui/ToggleThemeButton";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher";

export const Sidebar: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
      <button onClick={toggleCollapse} className={styles.collapseButton}>
        {isCollapsed ? ">" : "<"}
      </button>
      <ToggleThemeButton />
      <LanguageSwitcher />
    </nav>
  );
};

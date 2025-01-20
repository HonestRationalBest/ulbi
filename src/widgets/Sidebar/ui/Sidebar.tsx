import { FC, useState } from "react";
import * as styles from "./Sidebar.module.scss";
import ToggleThemeButton from "@/widgets/ToglleThemeButton/ui/ToggleThemeButton";

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
    </nav>
  );
};

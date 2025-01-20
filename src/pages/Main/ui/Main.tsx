import React from "react";
import { useTranslation } from "react-i18next";

const Main: React.FC = () => {
  const { t } = useTranslation("");

  return <div>{t("mainPage.title")}</div>;
};

export default Main;

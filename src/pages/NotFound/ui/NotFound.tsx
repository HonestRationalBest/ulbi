import React from "react";
import { useTranslation } from "react-i18next";

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation("");

  return <div>{t("notFoundPage.title")}</div>;
};

export default NotFoundPage;

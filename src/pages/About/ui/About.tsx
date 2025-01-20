import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation("about");

  return <div>{t("aboutPage.title")}</div>;
};

export default About;

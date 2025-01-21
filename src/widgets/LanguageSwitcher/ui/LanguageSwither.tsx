import { useTranslation } from "react-i18next";

export const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>
        {t("languageSwitcher.english")}
      </button>
      <button onClick={() => changeLanguage("ru")}>
        {t("languageSwitcher.russian")}
      </button>
    </div>
  );
};

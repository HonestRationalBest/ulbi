import { FC } from "react";
import { useTranslation } from "react-i18next";

const ErrorPage: FC = () => {
  const { t } = useTranslation();
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>{t("errorBoundary.title")}</h1>
      <p>{t("errorBoundary.description")}</p>
      <button
        onClick={reloadPage}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        {t("errorBoundary.reloadButton")}
      </button>
    </div>
  );
};

export default ErrorPage;

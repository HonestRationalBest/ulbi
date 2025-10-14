import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./config/i18n/i18n";
import ErrorBoundary from "./providers/ErrorBoundary/ErrorBoundaty";
import { ErrorPage } from "@/pages/Error";

const container = document.getElementById("root");
if (!container) throw new Error("Root container not found");

const root = createRoot(container);
root.render(
  <StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);

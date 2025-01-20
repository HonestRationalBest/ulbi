import { AboutPage } from "@/pages/About";
import { MainPage } from "@/pages/Main";
import { ReactElement } from "react";

interface Route {
  path: string;
  element: ReactElement;
}

export const routes: Array<Route> = [
  { element: <MainPage />, path: "/" },
  { element: <AboutPage />, path: "/about" },
];

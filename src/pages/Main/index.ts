import { lazy } from "react";

export const MainPage = lazy(
  () => import(/* webpackChunkName: "about" */ "./ui/Main")
);

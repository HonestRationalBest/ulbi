import { lazy } from "react";

export const AboutPage = lazy(
  () => import(/* webpackChunkName: "about" */ "./ui/About")
);

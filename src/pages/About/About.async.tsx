import { lazy } from "react";

export const AboutAsync = lazy(
  () => import(/* webpackChunkName: "about" */ "./About")
);

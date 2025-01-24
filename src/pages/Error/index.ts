import { lazy } from "react";

export const ErrorPage = lazy(
  () => import(/* webpackChunkName: "error" */ "./ui/Error")
);

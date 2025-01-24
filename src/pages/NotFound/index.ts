import { lazy } from "react";

export const NotFoundPage = lazy(
  () => import(/* webpackChunkName: "not_found" */ "./ui/NotFound")
);

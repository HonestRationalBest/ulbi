import { routes } from "@/app/config";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route path={path} element={element} />
      ))}
    </Routes>
  );
};

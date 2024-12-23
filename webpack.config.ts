import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";
import { Configuration } from "webpack";

export default (env: { mode: "development" | "production" }): Configuration => {
  const mode = env.mode || "development";
  const isDev = env.mode === "development";

  const paths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  return buildWebpack({ mode, paths, isDev });
};

import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export function buildDevServer({
  paths,
}: BuildOptions): DevServerConfiguration {
  return {
    static: {
      directory: paths.output,
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
    hot: true,
  };
}

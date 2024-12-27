import { Configuration } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolver";
import { buildDevServer } from "./buildDevServer";
import { BuildOptions } from "./types";

export function buildWebpack(options: BuildOptions): Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.output,
      publicPath: "/",
      clean: true,
    },
    resolve: buildResolvers(options),
    module: {
      rules: buildLoaders(options),
    },
    plugins: buildPlugins(options),
    devServer: buildDevServer(options),
    devtool: !options.isDev ? "source-map" : "eval-source-map",
  };
}

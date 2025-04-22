import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types";
import { buildScssLoader } from "./helpers/buildScssLoader";
import { buildSvgLoader } from "./helpers/buildSvgLoader";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: "ts-loader",
  };

  const scssModuleLoader: RuleSetRule = buildScssLoader(isDev);
  const svgLoader: RuleSetRule = buildSvgLoader();

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2?|eot|ttf|otf|mp4|webm|webp)$/i,
    type: "asset/resource",
    generator: {
      filename: isDev ? "[path][name][ext]" : "[hash][ext][query]",
    },
  };

  return [tsLoader, scssModuleLoader, svgLoader, fileLoader];
}

import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: "ts-loader",
  };

  const scssModuleLoader: RuleSetRule = {
    test: /\.scss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: true,
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64]",
          },
          sourceMap: isDev,
        },
      },
      {
        loader: "sass-loader",
        options: { sourceMap: isDev },
      },
    ],
  };

  return [tsLoader, scssModuleLoader];
}

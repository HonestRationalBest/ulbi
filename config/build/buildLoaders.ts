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
  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          svgo: true,
        },
      },
    ],
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2?|eot|ttf|otf|mp4|webm|webp)$/i,
    type: "asset/resource",
    generator: {
      filename: isDev ? "[path][name][ext]" : "[hash][ext][query]",
    },
  };

  return [tsLoader, scssModuleLoader, svgLoader, fileLoader];
}

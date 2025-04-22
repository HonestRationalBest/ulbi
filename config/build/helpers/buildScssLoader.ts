import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildScssLoader = (isDev?: boolean): RuleSetRule => {
  return {
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
};

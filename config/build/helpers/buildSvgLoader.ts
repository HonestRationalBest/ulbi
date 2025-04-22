import { RuleSetRule } from "webpack";

export const buildSvgLoader = (): RuleSetRule => {
  return {
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
};

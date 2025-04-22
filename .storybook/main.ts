import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { buildScssLoader } from "../config/build/helpers/buildScssLoader";
import { buildSvgLoader } from "../config/build/helpers/buildSvgLoader";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "@": path.resolve(__dirname, "../src"),
      };
    }

    if (config.module?.rules) {
      config.module.rules = config.module.rules.map((rule) => {
        if (
          typeof rule === "object" &&
          rule?.test instanceof RegExp &&
          rule.test.test(".svg")
        ) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
      });

      config.module.rules.push(buildScssLoader(true));
      config.module.rules.push(buildSvgLoader());
    }
    return config;
  },
};
export default config;

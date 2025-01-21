import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginI18next from "eslint-plugin-i18next";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      i18next: pluginI18next,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginI18next.configs.recommended.rules,
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "i18next/no-literal-string": [
        "error",
        {
          ignoreAttributes: ["data-testid", "aria-label"],
        },
      ],
    },
  },
];

import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintReact from "@eslint-react/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import * as mdx from "eslint-plugin-mdx";
import prettierConfig from "eslint-config-prettier/flat";
import globals from "globals";

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

export default defineConfig([
  {
    ignores: [
      "dist/",
      "node_modules/",
      ".yarn/",
      "build/",
      "coverage/",
      "static/",
      ".docusaurus/",
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  eslintReact.configs["recommended-typescript"],
  jsxA11y.flatConfigs.recommended,
  prettierConfig,

  // JS/TS files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
        JSX: true,
      },
      parserOptions: {
        allowImportExportEverywhere: true,
      },
    },
    rules: {
      "no-restricted-exports": OFF,
      "class-methods-use-this": OFF,
      "jsx-a11y/click-events-have-key-events": WARNING,
      "jsx-a11y/no-noninteractive-element-interactions": WARNING,
      "jsx-a11y/html-has-lang": OFF,
      "no-console": OFF,
      "no-else-return": OFF,
      "no-param-reassign": [WARNING, { props: false }],
      "no-underscore-dangle": OFF,
      curly: [WARNING, "all"],
      "react-hooks/rules-of-hooks": ERROR,
      "react-hooks/exhaustive-deps": WARNING,
      "@eslint-react/no-array-index-key": OFF,
      "@typescript-eslint/no-inferrable-types": OFF,
      "no-lonely-if": WARNING,
      "no-use-before-define": OFF,
      "@typescript-eslint/no-use-before-define": [
        ERROR,
        { functions: false, classes: false, variables: true },
      ],
    },
  },

  // MDX/Markdown files
  {
    ...mdx.flat,
    files: ["**/*.{md,mdx}"],
  },
  {
    ...mdx.flatCodeBlocks,
    files: ["**/*.{md,mdx}"],
  },
]);

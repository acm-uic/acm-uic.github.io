// @ts-check

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  globals: {
    testStylelintRule: true,
    JSX: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["react-hooks"],
  rules: {
    "class-methods-use-this": OFF,
    "jsx-a11y/click-events-have-key-events": WARNING,
    "jsx-a11y/no-noninteractive-element-interactions": WARNING,
    "jsx-a11y/html-has-lang": OFF,
    "import/no-unresolved": [ERROR, { ignore: ["^@theme", "^@docusaurus", "^@generated", "unist", "mdast"] }],
    "import/extensions": OFF,
    "no-console": OFF,
    "no-else-return": OFF,
    "no-param-reassign": [WARNING, { props: false }],
    "no-underscore-dangle": OFF,
    curly: [WARNING, "all"],
    "react/jsx-closing-bracket-location": OFF,
    "react/jsx-filename-extension": OFF,
    "react/jsx-one-expression-per-line": OFF,
    "react/no-array-index-key": OFF,
    "react/prop-types": OFF,
    "react/destructuring-assignment": OFF,
    "react/prefer-stateless-function": WARNING,
    "react/jsx-props-no-spreading": OFF,
    "react-hooks/rules-of-hooks": ERROR,
    "react/require-default-props": [ERROR, { ignoreFunctionalComponents: true }],
    "@typescript-eslint/no-inferrable-types": OFF,
    "import/first": OFF,
    "import/order": OFF,
    "import/prefer-default-export": OFF,
    "lines-between-class-members": OFF,
    "no-lonely-if": WARNING,
    "no-use-before-define": OFF,
    "@typescript-eslint/no-use-before-define": [ERROR, { functions: false, classes: false, variables: true }],
  },
};

module.exports = config;

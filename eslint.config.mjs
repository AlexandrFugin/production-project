import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import i18next from 'eslint-plugin-i18next';

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        __IS_DEV__: true,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    rules: {
      "no-unused-vars": "warn",
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      indent: ["error", 2],
      "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".tsx"] }],
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "react/require-default-props": "off",
      "react/jsx-props-no-spreading": "warn",
      "react/function-component-definition": "off",
      "no-shadow": "off",
      "import/extensions": "off",
      "import/no-extraneous-dependencies": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "no-underscore-dangle": "off",
      "i18next/no-literal-string": ['error', {markupOnly: true}]
    },
  },
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
  i18next.configs['flat/recommended'],
]);

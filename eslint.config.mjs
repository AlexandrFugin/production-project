import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';
import i18next from 'eslint-plugin-i18next';
import alexandrPlugin from 'eslint-plugin-alexandr-plugin';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'alexandr-plugin': alexandrPlugin,
      'unused-imports': unusedImports,
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.js', '.jsx', '.tsx'] },
      ],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'react/function-component-definition': 'off',
      'no-shadow': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'no-underscore-dangle': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'i18next/no-literal-string': [
        'error',
        {
          markupOnly: true,
          ignoreAttribute: [
            'as',
            'role',
            'data-testid',
            'to',
            'target',
            'justify',
            'align',
            'border',
            'direction',
            'gap',
          ],
        },
      ],
      'max-len': ['error', { ignoreComments: true, code: 125 }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'no-param-reassign': 'off',
      'no-undef': 'off',
      'alexandr-plugin/path-checker': ['error', { alias: '@' }],
      'alexandr-plugin/layer-imports': [
        'error',
        {
          alias: '@',
          ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
        },
      ],
      'alexandr-plugin/public-api-imports': [
        'error',
        {
          alias: '@',
          testFilesPatterns: [
            '**/*.test.*',
            '**/*.story.*',
            '**/StoreDecorator.tsx',
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  i18next.configs['flat/recommended'],
  {
    files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off',
    },
  },
  eslintConfigPrettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    rules: {
      // после prettier, иначе config-prettier отключит правило
      'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    },
  },
]);

import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import antfu from '@antfu/eslint-config';

export const eslint = () =>
  antfu(
    {
      react: true,
      typescript: true,
      jsx: true
    },
    {
      name: 'happycode-core/rewrite',
      rules: {
        'style/semi': 'off',
        'style/jsx-one-expression-per-line': 'off',
        'style/member-delimiter-style': 'off',
        'style/jsx-quotes': ['error', 'prefer-single'],
        'style/comma-dangle': 'off',
        'style/arrow-parens': 'off',
        'style/quote-props': 'off',

        'antfu/top-level-function': 'off',
        'antfu/if-newline': 'off',
        'antfu/curly': 'off',

        'test/prefer-lowercase-title': 'off',
        'no-console': 'off',
        'no-unused-vars': 'off',
        'unused-imports/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'off'
      }
    },
    {
      name: 'happycode-core/ignores',
      ignores: ['build/**/*']
    },
    {
      name: 'react',
      plugins: {
        'happycode-core': pluginReact
      },
      settings: {
        react: {
          version: 'detect'
        }
      },
      rules: {
        ...Object.entries(pluginReact.configs.recommended.rules).reduce((acc, [key, value]) => {
          acc[key.replace('react', 'happycode-core')] = value;
          return acc;
        }, {}),
        'happycode-core/only-export-components': 'off',
        'happycode-core/react-in-jsx-scope': 'off',
        'happycode-core/function-component-definition': [
          'error',
          {
            namedComponents: ['arrow-function'],
            unnamedComponents: 'arrow-function'
          }
        ]
      }
    },
    {
      name: 'happycode-core/imports',
      plugins: {
        'simple-import-sort': simpleImportSort
      },
      rules: {
        'sort-imports': 'off',
        'react-refresh/only-export-components': 'off',
        'import/order': 'off',
        'import/extensions': 'off',
        'perfectionist/sort-imports': 'off',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^'],
              ['^@'],
              ['^\\u0000'],
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              ['^.+\\.s?scss$']
            ]
          }
        ]
      }
    }
  );

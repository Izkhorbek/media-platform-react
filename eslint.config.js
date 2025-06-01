import globals from "globals"
import pluginJs from "@eslint/js"
import prettier from "eslint-config-prettier"
import pluginPrettier from "eslint-plugin-prettier"

export default [
  {
    languageOptions: { globals: globals.browser },
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { prettier: pluginPrettier },
    rules: {
      ...pluginJs.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'semi': ['error', 'never'],
      'no-console': 'off',
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'max-len': ['error', { 'code': 120 }],
      'no-multi-spaces': [2, { ignoreEOLComments: true }],
      'prefer-const': 2,
      'no-useless-escape': 0,
      'no-dupe-keys': 2,
      'no-duplicate-case': 2,
      'new-parens': 2,
      'object-curly-spacing': ['error', 'always', { 'objectsInObjects': true }],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'space-infix-ops': 'error',
    },
  },
  prettier,
]

/*
  We use prettier for formatting code and eslint for linting and autofixing any
  auto-fixable errors. This is all executed via the `prettier-eslint` package.
  This packages uses `prettier` first and then pipes the formatted output into
  `eslint --fix`.

  The advantage of using this combiner package `prettier-eslint` is that first
  both separate tools don't come into conflict with each other and second we are
  able to define all rules we like in one place: here in the eslint config file.

  If a prettier option is not defined here as an eslint rule, prettier's default
  for that option will be used. The prettier defaults can be looked up here:
  https://prettier.io/docs/en/options.html

  We are using the recommended preset `eslint:recommended` and can extend it with
  some additional presets as we see fit over time. Which rules are defined in
  the `eslint:recommended` preset and which of those are auto-fixed can be
  looked up here: https://eslint.org/docs/rules/

  Our repository has a `./vscode/settings.json` that tells the prettier
  plugin to delegate work to the `prettier-eslint` combiner package. It's up
  to you if you like to have your code formatted on save with the vscode
  'Format On Save' setting or only if you run the formatter yourself with
  the 'Format Document' command from the command palettte.
  Other editor users: Feel free to extend your editor settings here.
*/

module.exports = {
  plugins: ['react', 'cypress', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended'
  ], // use recommended rule set as a base for our configuration
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
    'cypress/globals': true
  },
  // These rules override any of the rules defined in the presets under the
  // `extends` option and also any matching prettier options. If we want custom
  // rules we can add them here later.
  ignorePatterns: ['*.d.ts'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/prop-types': 0
  },
  settings: {
    react: {
      version: '16.8.6'
    }
  },
  globals: {
    $: 'readonly',
    Foundation: 'readonly',
    Turbolinks: 'readonly'
  }
};

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'arrow-body-style': 0,
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    camelcase: 0,
    'class-methods-use-this': 0,
    'func-names': 0,
    'max-len': ['error', { code: 150 }],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    quotes: [2, 'single', 'avoid-escape'],
    'no-use-before-define': ['error', { functions: false, classes: false }],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    '@typescript-eslint/interface-name-prefix': 0,
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
  },
};

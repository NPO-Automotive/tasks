module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'no-throw-literal': 'off',
    'no-undef': 'off',
    'prettier/prettier': 'error',
  },
  globals: {
    _: 'readonly',
    sails: 'readonly',
  },
};

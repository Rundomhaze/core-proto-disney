module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'func-names': ['error', 'never'],
    'no-console': 'off',
    'no-plusplus': 'never',
  },
};

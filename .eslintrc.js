module.exports = {
  root: true,
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
  'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
};

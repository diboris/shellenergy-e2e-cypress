module.exports = {
  'env': {
    'node': true,
    'jest': true,
    'commonjs': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:cypress/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
  },
  'rules': {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
  },
}

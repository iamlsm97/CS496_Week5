// http://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: 'airbnb',
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      es6: true,
      es7: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  // required to lint *.vue files
  plugins: [
    'html',
    'babel',
    'import',
    'vue',
    'async-await',
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'space-before-function-paren': ['error', 'always'],
    'no-param-reassign': ['error', { 'props': false }],
    'jsx-a11y/no-hash-href': 'off',
    'no-console': 0,
    'linebreak-style': 'off',
  },
};

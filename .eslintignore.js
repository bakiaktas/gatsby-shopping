module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  root: true,
  rules: {
    'react-hooks/rules-of-hooks': `warn`,
    'react-hooks/exhaustive-deps': `warn`,
    'react/react-in-jsx-scope': `off`,
  },
  env: {
    'amd': true,
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jest': true,
    'node': true
  },
  extends: [
    `react-app`,
    `eslint:recommended`,
    `plugin:react/recommended`
  ],
  parser: `babel-eslint`,
  parserOptions: {
    'ecmaVersion': 2020,
    'sourceType': `module`,
    'ecmaFeatures': {
      'jsx': true,
      'impliedStrict': true
    }
  },
  plugins: [
    `react`,
    `react-hooks`,
    `babel`,
    `promise`
  ],
  settings: {
    'react': {
      'version': `detect`
    }
  }
};
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	'no-tabs': 'off',
	'indent': 'off',
	'no-mixed-spaces-and-tabs': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

const OFF = 0

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'prettier/react',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['prettier', 'react'],
	rules: {
		// React
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

		// Import
		'import/no-extraneous-dependencies': OFF,
	},
}

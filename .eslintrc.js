const OFF = 0
const ERROR = 2

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:import/recommended',
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
	parser: 'babel-eslint',
	plugins: ['babel', 'react-hooks'],
	rules: {
		'jsx-a11y/label-has-associated-control': OFF,
		'jsx-a11y/label-has-for': OFF, // deprecated
		'jsx-a11y/no-autofocus': OFF,

		// React
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/no-direct-mutation-state': ERROR,
		'react/require-default-props': OFF,
		'react/jsx-handler-names': [
			ERROR,
			{
				// airbnb is disabling this rule
				eventHandlerPrefix: 'handle',
				eventHandlerPropPrefix: 'on',
			},
		],
		'react-hooks/rules-of-hooks': ERROR,
		'react-hooks/exhaustive-deps': [ERROR, { additionalHooks: 'useEnhancedEffect' }],

		// Import
		'import/no-extraneous-dependencies': OFF,
		'import/namespace': [ERROR, { allowComputed: true }],
		'import/order': [
			ERROR,
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				'newlines-between': 'never',
			},
		],
	},
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
}

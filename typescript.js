module.exports = {
	extends: [
		'./.eslintrc.js',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: [ '@typescript-eslint' ],
	rules: {
		// Additional TS rules.
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
		'dot-notation': 'off',
		'@typescript-eslint/no-unused-vars': 'error',

		// Base rule overrides.
		'node/no-missing-import': 'off',
		'prefer-let/prefer-let': 'off',
	},
};

module.exports = {
	extends: [
		'./.eslintrc.js',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parser: '@typescript-eslint/parser',
	plugins: [ '@typescript-eslint' ],
	rules: {
		// Additional TS rules.
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/require-await': 'off',

		// Base rule overrides.
		'node/no-missing-import': 'off',
		'prefer-let/prefer-let': 'off',
	},
};

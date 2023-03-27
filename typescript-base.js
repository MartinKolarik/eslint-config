module.exports = {
	parser: 'espree',
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
	overrides: [
		{
			files: [
				'**/*.ts',
			],
			parser: '@typescript-eslint/parser',
		},
	],
};

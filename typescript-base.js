const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
	{
		rules: {
			// Additional TS rules.
			'no-useless-constructor': 'off',
			'@typescript-eslint/no-useless-constructor': 'error',
			'dot-notation': 'off',
			'no-unused-expressions': 'off',
			'@typescript-eslint/no-unused-expressions': [ 'error', {
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			}],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ ignoreRestSiblings: true },
			],
		},
	},
	{
		files: [ 'test/**' ],

		rules: {
			'@typescript-eslint/no-unused-expressions': 'off',
		},
	},
]);

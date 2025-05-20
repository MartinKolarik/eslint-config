const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
	{
		name: '@martin-kolarik/typescript/base',

		rules: {
			// Additional TS rules.
			'no-useless-constructor': 'off',
			'@typescript-eslint/no-useless-constructor': 'error',
			'dot-notation': 'off',
			'no-unused-expressions': 'off',
			'@typescript-eslint/no-unused-expressions': [
				'error',
				{
					allowShortCircuit: true,
					allowTernary: true,
					allowTaggedTemplates: true,
				},
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ ignoreRestSiblings: true },
			],

			// Stylistic rules.
			'@typescript-eslint/consistent-type-assertions': 'error',
			'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		},
	},
	{
		name: '@martin-kolarik/typescript/ignores',
		ignores: [ '!**/.*.ts' ],
	},
	{
		name: '@martin-kolarik/typescript/tests',

		files: [ 'test/**' ],

		rules: {
			'@typescript-eslint/no-unused-expressions': 'off',
		},
	},
]);

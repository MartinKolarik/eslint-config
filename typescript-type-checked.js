const { defineConfig } = require('eslint/config');
const ts = require('typescript-eslint');

const javascript = require('./javascript');
const typescriptBase = require('./typescript-base');
const typescriptBaseJs = require('./typescript-base-js');

module.exports = defineConfig([
	javascript,
	typescriptBaseJs,
	{
		name: '@martin-kolarik/typescript-type-checked',

		files: [ '**/*.ts' ],

		extends: [
			ts.configs.recommendedTypeChecked,
			typescriptBase,
		],

		rules: {
			'@typescript-eslint/require-await': 'off',

			// Stylistic rules.
			'@typescript-eslint/dot-notation': 'error',
			'@typescript-eslint/non-nullable-type-assertion-style': 'error',
			'@typescript-eslint/prefer-find': 'error',
			'@typescript-eslint/prefer-includes': 'error',
			'@typescript-eslint/prefer-regexp-exec': 'error',
			'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		},
	},
]);

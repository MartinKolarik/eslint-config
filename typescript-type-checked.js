const { defineConfig } = require('eslint/config');
const ts = require('typescript-eslint');

const javascript = require('./javascript');
const typescriptBase = require('./typescript-base');
const typescriptBaseJs = require('./typescript-base-js');

module.exports = defineConfig([
	javascript,
	typescriptBaseJs,
	{
		files: [ '**/*.ts' ],

		extends: [
			ts.configs.recommendedTypeChecked,
			typescriptBase,
		],

		rules: {
			'@typescript-eslint/dot-notation': 'error',
			'@typescript-eslint/require-await': 'off',
		},
	},
]);

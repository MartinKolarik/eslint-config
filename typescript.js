const { defineConfig } = require('eslint/config');
const ts = require('typescript-eslint');

const javascript = require('./javascript');
const typescriptBase = require('./typescript-base');
const typescriptBaseJs = require('./typescript-base-js');

module.exports = defineConfig([
	javascript,
	typescriptBaseJs,
	{
		name: '@martin-kolarik/typescript',

		files: [ '**/*.ts' ],

		extends: [
			ts.configs.recommended,
			typescriptBase,
		],
	},
]);

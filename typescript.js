const { defineConfig } = require('eslint/config');
const ts = require('typescript-eslint');

const javascript = require('./javascript');
const typescriptBase = require('./typescript-base');
const typescriptBaseJs = require('./typescript-base-js');

const forFiles = (files = [ '**/*.ts' ]) => defineConfig([
	javascript,
	typescriptBaseJs,
	{
		name: '@martin-kolarik/typescript',

		files,

		extends: [
			ts.configs.recommended,
			typescriptBase,
		],
	},
]);

module.exports = forFiles();
module.exports.forFiles = forFiles;

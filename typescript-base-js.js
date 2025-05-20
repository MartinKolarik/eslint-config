const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
	{
		name: '@martin-kolarik/typescript/base-js-overrides',

		rules: {
			'prefer-let/prefer-let': 'off',
		},
	},
]);

const { defineConfig, globalIgnores } = require('eslint/config');

module.exports = defineConfig([
	globalIgnores([ '!**/.*.ts' ]),
	{
		rules: {
			'prefer-let/prefer-let': 'off',
		},
	},
]);

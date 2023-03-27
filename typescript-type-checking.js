module.exports = {
	overrides: [
		{
			files: [
				'*.ts',
			],
			extends: [
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'./typescript-base.js',
			],
			rules: {
				'@typescript-eslint/dot-notation': 'error',
				'@typescript-eslint/require-await': 'off',
			},
		},
	],
};

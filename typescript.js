module.exports = {
	extends: [
		'./.eslintrc.js',
		'./typescript-base-js.js',
	],
	overrides: [
		{
			files: [
				'*.ts',
			],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'./typescript-base.js',
			],
		},
	],
};

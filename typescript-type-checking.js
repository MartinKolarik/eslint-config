module.exports = {
	extends: [
		'./.eslintrc.js',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'./typescript-base.js',
	],
	rules: {
		// Additional TS rules.
		'@typescript-eslint/dot-notation': 'error',
		'@typescript-eslint/require-await': 'off',
	},
};

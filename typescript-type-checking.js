module.exports = {
	extends: [
		'./typescript.js',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	rules: {
		// Additional TS rules.
		'@typescript-eslint/dot-notation': 'error',
		'@typescript-eslint/require-await': 'off',
	},
};

module.exports = {
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	env: {
		es6: true,
		node: true,
		mocha: true,
		browser: true,
	},
	plugins: [
		'html',
		'node',
		'promise',
		'prefer-let',
	],
	rules: {
		'getter-return': [
			'off',
		],
		'no-cond-assign': [
			'off',
		],
		'no-console': [
			'off',
		],
		'no-control-regex': [
			'off',
		],
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true,
			},
		],
		'no-extra-parens': [
			'error',
			'all',
			{
				conditionalAssign: false,
				returnAssign: false,
				nestedBinaryExpressions: false,
				enforceForArrowConditionals: false,
			},
		],
		'require-atomic-updates': [
			'off',
		],
		'array-callback-return': [
			'error',
		],
		'curly': [
			'error',
		],
		'dot-notation': [
			'error',
		],
		'eqeqeq': [
			'error',
			'always',
			{
				null: 'ignore',
			},
		],
		'guard-for-in': [
			'error',
		],
		'no-else-return': [
			'error',
			{
				allowElseIf: true,
			},
		],
		'no-implicit-coercion': [
			'error',
			{
				boolean: false,
			},
		],
		'no-multi-spaces': [
			'error',
		],
		'no-multi-str': [
			'error',
		],
		'no-new-wrappers': [
			'error',
		],
		'no-octal-escape': [
			'error',
		],
		'no-return-await': [
			'error',
		],
		'no-self-compare': [
			'error',
		],
		'no-throw-literal': [
			'error',
		],
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			},
		],
		'no-useless-concat': [
			'error',
		],
		'no-useless-escape': [
			'error',
		],
		'no-useless-return': [
			'error',
		],
		'no-with': [
			'error',
		],
		'prefer-promise-reject-errors': [
			'error',
		],
		'yoda': [
			'error',
		],
		'array-bracket-spacing': [
			'error',
			'always',
			{
				objectsInArrays: false,
			},
		],
		'block-spacing': [
			'error',
		],
		'brace-style': [
			'error',
			'1tbs',
			{ allowSingleLine: true },
		],
		'camelcase': [
			'error',
			{
				properties: 'never',
			},
		],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
			},
		],
		'comma-spacing': [
			'error',
		],
		'comma-style': [
			'error',
		],
		'computed-property-spacing': [
			'error',
		],
		'eol-last': [
			'error',
		],
		'func-call-spacing': [
			'error',
		],
		'function-paren-newline': [
			'error',
		],
		'implicit-arrow-linebreak': [
			'error',
		],
		'indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'key-spacing': [
			'error',
		],
		'keyword-spacing': [
			'error',
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		'lines-around-comment': [
			'error',
			{
				allowBlockStart: true,
				allowObjectStart: true,
				allowArrayStart: true,
				allowClassStart: true,
			},
		],
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true,
			},
		],
		'new-cap': [
			'error',
			{
				capIsNew: false,
			},
		],
		'new-parens': [
			'error',
		],
		'no-array-constructor': [
			'error',
		],
		'no-bitwise': [
			'error',
		],
		'no-mixed-operators': [
			'error',
			{
				groups: [
					[ '%', '**' ],
					[ '&', '|', '^', '~', '<<', '>>', '>>>' ],
					[ '&&', '||' ],
				],
			},
		],
		'no-multiple-empty-lines': [
			'error',
		],
		'no-new-object': [
			'error',
		],
		'no-trailing-spaces': [
			'error',
		],
		'no-unneeded-ternary': [
			'error',
		],
		'no-whitespace-before-property': [
			'error',
		],
		'object-curly-spacing': [
			'error',
			'always',
		],
		'operator-assignment': [
			'error',
		],
		'operator-linebreak': [
			'error',
			'before',
		],
		'padded-blocks': [
			'error',
			'never',
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: [ 'block-like' ],
				next: '*',
			},
			{
				blankLine: 'always',
				prev: '*',
				next: [ 'block-like' ],
			},
			{
				blankLine: 'always',
				prev: [ 'multiline-expression' ],
				next: '*',
			},
			{
				blankLine: 'always',
				prev: '*',
				next: [ 'multiline-expression' ],
			},
			{
				blankLine: 'always',
				prev: [ 'const', 'let' ],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: [ 'const', 'let' ],
				next: [ 'expression' ],
			},
			{
				blankLine: 'any',
				prev: [ 'const', 'let' ],
				next: [ 'const', 'let', 'return' ],
			},
		],
		'quote-props': [
			'error',
			'consistent-as-needed',
		],
		'quotes': [
			'error',
			'single',
			{
				allowTemplateLiterals: true,
			},
		],
		'semi': [
			'error',
			'always',
		],
		'semi-spacing': [
			'error',
		],
		'semi-style': [
			'error',
		],
		'space-before-blocks': [
			'error',
		],
		'space-before-function-paren': [
			'error',
		],
		'space-in-parens': [
			'error',
		],
		'space-infix-ops': [
			'error',
		],
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false,
			},
		],
		'spaced-comment': [
			'error',
		],
		'switch-colon-spacing': [
			'error',
		],
		'template-tag-spacing': [
			'error',
		],
		'unicode-bom': [
			'error',
		],
		'arrow-parens': [
			'error',
			'as-needed',
			{
				requireForBlockBody: true,
			},
		],
		'arrow-spacing': [
			'error',
		],
		'generator-star-spacing': [
			'error',
		],
		'no-duplicate-imports': [
			'error',
		],
		'no-useless-computed-key': [
			'error',
		],
		'no-useless-constructor': [
			'error',
		],
		'no-useless-rename': [
			'error',
		],
		'no-var': [
			'error',
		],
		'object-shorthand': [
			'error',
		],
		'prefer-arrow-callback': [
			'error',
		],
		'prefer-numeric-literals': [
			'error',
		],
		'prefer-rest-params': [
			'error',
		],
		'prefer-spread': [
			'error',
		],
		'rest-spread-spacing': [
			'error',
		],
		'template-curly-spacing': [
			'error',
		],
		'yield-star-spacing': [
			'error',
		],
		'node/no-extraneous-import': [
			'error',
		],
		'node/no-extraneous-require': [
			'error',
		],
		'node/no-missing-import': [
			'error',
		],
		'node/no-missing-require': [
			'error',
		],
		'node/no-deprecated-api': [
			'warn',
		],
		'promise/catch-or-return': [
			'error',
		],
		'promise/no-return-wrap': [
			'error',
		],
		'promise/param-names': [
			'error',
		],
		'promise/valid-params': [
			'error',
		],
		'prefer-let/prefer-let': [
			'error',
		],
	},
	overrides: [
		{
			files: [
				'test/**',
			],
			plugins: [
				'chai-expect',
			],
			rules: {
				'no-unused-expressions': [
					'off',
				],
				'chai-expect/no-inner-compare': [
					'error',
				],
				'chai-expect/missing-assertion': [
					'error',
				],
				'chai-expect/terminating-properties': [
					'error',
				],
				'no-restricted-properties': [
					'error',
					{
						property: 'eq',
						message: 'Please use .equal() instead.',
					},
					{
						property: 'eql',
						message: 'Please use .deep.equal() instead.',
					},
				],
			},
		},
	],
};

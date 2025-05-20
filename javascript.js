const { defineConfig } = require('eslint/config');
const stylistic = require('@stylistic/eslint-plugin');
const js = require('@eslint/js');
const n = require('eslint-plugin-n');
const jsonc = require('eslint-plugin-jsonc');
const promise = require('eslint-plugin-promise');
const preferLet = require('eslint-plugin-prefer-let');
const chaiExpect = require('eslint-plugin-chai-expect');
const globals = require('globals');

module.exports = defineConfig([
	{
		name: '@martin-kolarik/javascript/base',

		extends: [
			'js/recommended',
			'jsonc/flat/recommended-with-json',
		],

		languageOptions: {
			sourceType: 'module',
			parserOptions: {},

			globals: {
				...globals.browser,
				...globals.mocha,
				...globals.node,
			},
		},

		plugins: {
			n,
			js,
			jsonc,
			promise,
			'@stylistic': stylistic,
			'prefer-let': preferLet,
		},

		rules: {
			'getter-return': 'off',
			'no-cond-assign': 'off',
			'no-console': 'off',
			'no-control-regex': 'off',

			'no-empty': [ 'error', {
				allowEmptyCatch: true,
			}],

			'require-atomic-updates': 'off',
			'array-callback-return': 'error',
			'curly': 'error',
			'dot-notation': 'error',

			'eqeqeq': [ 'error', 'always', {
				null: 'ignore',
			}],

			'guard-for-in': 'error',

			'no-else-return': [ 'error', {
				allowElseIf: true,
			}],

			'no-implicit-coercion': [ 'error', {
				boolean: false,
			}],

			'no-inner-declarations': 'error',
			'no-multi-str': 'error',
			'no-new-wrappers': 'error',
			'no-octal-escape': 'error',
			'no-return-await': 'error',
			'no-self-compare': 'error',
			'no-throw-literal': 'error',

			'no-unused-expressions': [ 'error', {
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			}],

			'no-useless-concat': 'error',
			'no-useless-escape': 'error',
			'no-useless-return': 'error',
			'no-with': 'error',
			'prefer-promise-reject-errors': 'error',
			'yoda': 'error',

			'camelcase': [ 'error', {
				properties: 'never',
				ignoreDestructuring: true,
			}],

			'new-cap': [ 'error', {
				capIsNew: false,
			}],

			'no-array-constructor': 'error',
			'no-bitwise': 'error',
			'no-object-constructor': 'error',
			'no-unneeded-ternary': 'error',
			'operator-assignment': 'error',
			'unicode-bom': 'error',
			'no-duplicate-imports': 'error',

			'no-empty-pattern': [ 'error', {
				allowObjectPatternsAsParameters: true,
			}],

			'no-useless-computed-key': 'error',
			'no-useless-constructor': 'error',
			'no-useless-rename': 'error',
			'no-var': 'error',
			'no-unused-private-class-members': 'error',

			'no-unused-vars': [ 'error', {
				ignoreRestSiblings: true,
			}],

			'object-shorthand': 'error',
			'prefer-arrow-callback': 'error',
			'prefer-numeric-literals': 'error',
			'prefer-object-has-own': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',

			// Stylistic
			'@stylistic/array-bracket-newline': [ 'error', 'consistent' ],

			'@stylistic/array-bracket-spacing': [ 'error', 'always', {
				objectsInArrays: false,
			}],

			'@stylistic/array-element-newline': [ 'error', {
				consistent: true,
				multiline: false,
			}],

			'@stylistic/arrow-parens': [ 'error', 'as-needed', {
				requireForBlockBody: true,
			}],

			'@stylistic/arrow-spacing': 'error',
			'@stylistic/block-spacing': 'error',

			'@stylistic/brace-style': [ 'error', '1tbs', {
				allowSingleLine: true,
			}],

			'@stylistic/comma-dangle': [ 'error', 'always-multiline' ],
			'@stylistic/comma-spacing': 'error',
			'@stylistic/comma-style': 'error',
			'@stylistic/computed-property-spacing': 'error',

			'@stylistic/curly-newline': [ 'error', {
				multiline: true,
				consistent: true,
			}],

			'@stylistic/dot-location': [ 'error', 'property' ],
			'@stylistic/eol-last': 'error',
			'@stylistic/func-call-spacing': 'error',
			'@stylistic/function-call-argument-newline': [ 'error', 'consistent' ],
			'@stylistic/function-call-spacing': 'error',
			'@stylistic/function-paren-newline': 'error',
			'@stylistic/generator-star-spacing': 'error',
			'@stylistic/implicit-arrow-linebreak': 'error',

			'@stylistic/indent': [ 'error', 'tab', {
				SwitchCase: 1,
			}],

			'@stylistic/key-spacing': 'error',
			'@stylistic/keyword-spacing': 'error',
			'@stylistic/linebreak-style': [ 'error', 'unix' ],

			'@stylistic/lines-around-comment': [ 'error', {
				allowBlockStart: true,
				allowObjectStart: true,
				allowArrayStart: true,
				allowClassStart: true,
			}],

			'@stylistic/lines-between-class-members': [ 'error', 'always', {
				exceptAfterSingleLine: true,
			}],

			'@stylistic/member-delimiter-style': 'error',
			'@stylistic/new-parens': 'error',

			'@stylistic/no-extra-parens': [ 'error', 'all', {
				conditionalAssign: false,
				returnAssign: false,
				nestedBinaryExpressions: false,
				enforceForArrowConditionals: false,
			}],

			'@stylistic/no-extra-semi': 'error',

			'@stylistic/no-mixed-operators': [ 'error', {
				groups: [ [ '%', '**' ], [ '&', '|', '^', '~', '<<', '>>', '>>>' ], [ '&&', '||' ] ],
			}],

			'@stylistic/no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ],
			'@stylistic/no-multi-spaces': 'error',
			'@stylistic/no-multiple-empty-lines': 'error',
			'@stylistic/no-trailing-spaces': 'error',
			'@stylistic/no-whitespace-before-property': 'error',

			'@stylistic/object-curly-newline': [ 'error', {
				consistent: true,
				multiline: true,
			}],

			'@stylistic/object-curly-spacing': [ 'error', 'always' ],

			'@stylistic/object-property-newline': [ 'error', {
				allowAllPropertiesOnSameLine: true,
			}],

			'@stylistic/operator-linebreak': [ 'error', 'before' ],
			'@stylistic/padded-blocks': [ 'error', 'never' ],

			'@stylistic/padding-line-between-statements': [ 'error', {
				blankLine: 'always',
				prev: [ 'block-like' ],
				next: '*',
			}, {
				blankLine: 'always',
				prev: '*',
				next: [ 'block-like' ],
			}, {
				blankLine: 'always',
				prev: [ 'multiline-expression' ],
				next: '*',
			}, {
				blankLine: 'always',
				prev: '*',
				next: [ 'multiline-expression' ],
			}, {
				blankLine: 'always',
				prev: [ 'const', 'let' ],
				next: '*',
			}, {
				blankLine: 'any',
				prev: [ 'const', 'let' ],
				next: [ 'expression' ],
			}, {
				blankLine: 'any',
				prev: [ 'const', 'let' ],
				next: [ 'const', 'let', 'return' ],
			}],

			'@stylistic/quote-props': [ 'error', 'consistent-as-needed' ],

			'@stylistic/quotes': [ 'error', 'single', {
				allowTemplateLiterals: true,
			}],

			'@stylistic/rest-spread-spacing': 'error',
			'@stylistic/semi': [ 'error', 'always' ],
			'@stylistic/semi-spacing': 'error',
			'@stylistic/semi-style': 'error',
			'@stylistic/space-before-blocks': 'error',
			'@stylistic/space-before-function-paren': 'error',
			'@stylistic/space-in-parens': 'error',
			'@stylistic/space-infix-ops': 'error',

			'@stylistic/space-unary-ops': [ 'error', {
				words: true,
				nonwords: false,
			}],

			'@stylistic/spaced-comment': 'error',
			'@stylistic/switch-colon-spacing': 'error',
			'@stylistic/template-curly-spacing': 'error',
			'@stylistic/template-tag-spacing': 'error',
			'@stylistic/type-annotation-spacing': 'error',
			'@stylistic/type-generic-spacing': 'error',
			'@stylistic/type-named-tuple-spacing': 'error',
			'@stylistic/yield-star-spacing': 'error',

			// jsonc
			'jsonc/array-bracket-newline': [ 'error', {
				minItems: 1,
			}],

			'jsonc/array-bracket-spacing': [ 'error', 'always', {
				objectsInArrays: false,
			}],

			'jsonc/array-element-newline': 'error',
			'jsonc/comma-style': [ 'error', 'last' ],

			'jsonc/indent': [ 'error', 'tab', {
				SwitchCase: 1,
			}],

			'jsonc/key-spacing': 'error',
			'jsonc/object-curly-newline': 'error',
			'jsonc/object-curly-spacing': [ 'error', 'always' ],
			'jsonc/object-property-newline': 'error',

			// n
			'n/no-extraneous-import': [ 'error', {}],
			'n/no-extraneous-require': 'error',

			'n/no-missing-import': [ 'error', {
				typescriptExtensionMap: [
					[ '', '.js' ],
					[ '.js', '.js' ],
					[ '.ts', '.js' ],
					[ '.d.ts', '.js' ],
					[ '.cts', '.cjs' ],
					[ '.mts', '.mjs' ],
					[ '.tsx', '.js' ],
				],
			}],

			'n/no-missing-require': 'error',
			'n/no-deprecated-api': [ 'warn' ],

			// promise
			'promise/catch-or-return': 'error',
			'promise/no-return-wrap': 'error',
			'promise/param-names': 'error',
			'promise/valid-params': 'error',

			// prefer-let
			'prefer-let/prefer-let': 'error',
		},
	},
	{
		name: '@martin-kolarik/javascript/ignores',
		ignores: [ '**/.*', '!**/.*.cjs', '!**/.*.js', '!**/.*.json' ],
	},
	{
		name: '@martin-kolarik/javascript/tests',

		files: [ 'test/**' ],

		plugins: {
			'chai-expect': chaiExpect,
		},

		rules: {
			'no-unused-expressions': 'off',
			'chai-expect/no-inner-compare': 'error',
			'chai-expect/missing-assertion': 'error',
			'chai-expect/terminating-properties': 'error',

			'no-restricted-properties': [ 'error', {
				property: 'eq',
				message: 'Please use .equal() instead.',
			}, {
				property: 'eql',
				message: 'Please use .deep.equal() instead.',
			}],
		},
	},
]);

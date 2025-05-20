# eslint-config

Shared eslint config.

## Installation

```
$ npm install --save-dev @martin-kolarik/eslint-config
```

## Usage

In JavaScript projects:

```js
import { defineConfig } from 'eslint/config';
import javascript from '@martin-kolarik/eslint-config';

export default defineConfig([
    javascript,
]);
```

In TypeScript projects:

```ts
import { defineConfig } from 'eslint/config';
import typescript from '@martin-kolarik/eslint-config/typescript.js';
import typescriptTypeChecked from '@martin-kolarik/eslint-config/typescript-type-checked.js';

export default defineConfig([
    typescript,
    {
        files: [ 'src/**/*.ts' ],
        extends: [ typescriptTypeChecked ],

        languageOptions: {
            sourceType: 'module',

            parserOptions: {
                project: true,
            },
        },
    },
]);
```

## License
Copyright (c) 2018 Martin Kolárik. Released under the MIT license.

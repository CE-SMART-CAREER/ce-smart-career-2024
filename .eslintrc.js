module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [ 
        'next',
        'prettier',
        'eslint-config-prettier', 
        'eslint-config-next',
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: [
        'unused-imports', 
        'prettier', 
        '@typescript-eslint', 
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      ecmaFeatures: { jsx: true },
      project: './tsconfig.json',
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },

    //  * 0 ~ 'off'
    //  * 1 ~ 'warn'
    //  * 2 ~ 'error'

    rules: {
        // general
        'no-alert': 0,
        'camelcase': 0,
        'no-console': 0,
        'no-unused-vars': 1,
        'no-nested-ternary': 1,
        'no-param-reassign': 0,
        'no-underscore-dangle': 0,
        'no-restricted-exports': 0,
        'no-promise-executor-return': 0,
        'import/prefer-default-export': 0,
        'prefer-destructuring': [1, { object: true, array: false }],

        // typescript
        '@typescript-eslint/naming-convention': 1,
        '@typescript-eslint/no-use-before-define': 1,
        '@typescript-eslint/consistent-type-exports': 1,
        '@typescript-eslint/consistent-type-imports': 1,
        '@typescript-eslint/no-unused-vars': [1, { args: 'none' }],

        // react
        'react/no-children-prop': 0,
        'react/react-in-jsx-scope': 0,
        'react/no-array-index-key': 0,
        'react/require-default-props': 0,
        'react/jsx-props-no-spreading': 0,
        'react/function-component-definition': 0,
        'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],
        'react/no-unstable-nested-components': [1, { allowAsProps: true }],
        'react/jsx-no-duplicate-props': [1, { ignoreCase: false }],

        // jsx-a11y
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/control-has-associated-label': 0,

        // unused imports
        "unused-imports/no-unused-imports": 1,
        'unused-imports/no-unused-vars': [
          1,
          { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
    }
}

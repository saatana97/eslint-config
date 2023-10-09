require('@rushstack/eslint-patch/modern-module-resolution');
export default {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    rules: {
        '@typescript-eslint/consistent-type-imports': 'warn',
        '@typescript-eslint/consistent-type-exports': 'warn',
        '@typescript-eslint/no-import-type-side-effects': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'prettier/prettier': 'warn',
        'no-alert': 'warn',
        'no-debugger': 'warn',
        'no-console': 'warn',
        'no-undef': 'error',
        'no-else-return': 'error',
        eqeqeq: [2, 'always'],
    },
    globals: {
        process: 'readonly',
        arguments: 'readonly',
    },
};

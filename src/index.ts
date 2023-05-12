export default {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true,
    },
    rules: {
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

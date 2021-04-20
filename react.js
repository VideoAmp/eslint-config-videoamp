module.exports = {
    env: {
        browser: true,
        jest: true,
    },
    extends: [
        './base.js',
        'plugin:react/recommended', // Enables jsx and react rules
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Should be last in the extends array.
    ],
    plugins: ['react-hooks'],
    rules: {
        'react/jsx-sort-props': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
    },
    settings: {
        react: {
            version: 'detect', // React version. "detect" automatically picks the version you have installed.
        },
    },
};

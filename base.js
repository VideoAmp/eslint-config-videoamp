module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    ],
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 6, // Allows for the parsing of ES6 features
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
        quotes: [
            'warn',
            'double',
            { avoidEscape: true, allowTemplateLiterals: true },
        ],
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        '@typescript-eslint/camelcase': 'off',
        // Public is assumed by default for class members, and shouldn't be explicit
        '@typescript-eslint/explicit-member-accessibility': 'off',
        // It's often not feasible to avoid an "any" type for some siuations
        '@typescript-eslint/no-explicit-any': 'warn',
        // We often can't control API JSON response/request property naming conventions
        '@typescript-eslint/prefer-interface': 'off',
    },
};

module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    env: {
        node: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    ],
    parserOptions: {
        ecmaVersion: 6, // Allows for the parsing of ES6 features
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // Public is assumed by default for class members, and shouldn't be explicit
        '@typescript-eslint/explicit-member-accessibility': 'no-public',
        // It's often not feasible to avoid an "any" type for some siuations
        '@typescript-eslint/no-explicit-any': 'off',
        // We often can't control API JSON response/request property naming conventions
        '@typescript-eslint/camelcase': 'off',
    },
};

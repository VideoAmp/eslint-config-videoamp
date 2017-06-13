module.exports = {
    "extends": [
        "./rules/possible-errors",
        "./rules/best-practices",
        "./rules/strict",
        "./rules/variables",
        "./rules/stylistic-issues",
        "./rules/es6",
        "./rules/plugins/import",
        "./rules/plugins/promise",
        "./rules/plugins/unicorn",
        "./rules/plugins/fp",
        "./rules/plugins/chai-expect",
        "./rules/plugins/chai-friendly",
    ].map(require.resolve),
};

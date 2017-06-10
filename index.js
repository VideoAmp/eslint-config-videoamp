module.exports = {
    "extends": [
        "./rules/possible-errors",
        "./rules/best-practices",
        "./rules/strict",
        "./rules/variables",
        "./rules/stylistic-issues",
        "./rules/es6",
        "./rules/plugins/import",
    ].map(require.resolve),
};

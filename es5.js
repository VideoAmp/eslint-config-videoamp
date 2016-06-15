module.exports = {
    "extends": [
        "eslint-config-airbnb-base/legacy",
        "./base",
    ].map(require.resolve),
    "rules": {
        "strict": [2, "function"],
    },
};

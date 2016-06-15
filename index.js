module.exports = {
    "extends": [
        "eslint-config-airbnb",
        "./base",
    ].map(require.resolve),
    "rules": {
        "new-cap": ["error", {
            newIsCap: true,
            capIsNewExceptions: ["express.Router"],
        }],
        "object-shorthand": ["error", "never"],
        "camelcase": ["off", { "properties": "always" }],
    },
};

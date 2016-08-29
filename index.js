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
        "camelcase": ["off", { "properties": "always" }],
    },
};

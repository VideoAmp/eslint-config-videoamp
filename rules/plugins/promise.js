module.exports = {
    plugins: ["promise"],
    rules: {
        "promise/catch-or-return": "error",
        "promise/no-return-wrap": "error",
        "promise/param-names": "error",
        "promise/always-return": "error",
        "promise/no-native": "error",
        "promise/no-nesting": "warn",
        "promise/no-promise-in-callback": "warn",
        "promise/no-callback-in-promise": "warn",
        "promise/avoid-new": "warn",
        "promise/prefer-await-to-then": "off",
        "promise/prefer-await-to-callbacks": "off",
    },
};

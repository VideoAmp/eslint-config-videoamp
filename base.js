module.exports = {
    "rules": {
        "quotes": ["error", "double", "avoid-escape"],
        "indent": ["error", 4],
        "dot-notation": ["error", { "allowPattern": "^[a-z]+(_[a-z]+)+$" }],
        "space-before-function-paren": ["error", "never"],
        "quote-props": ["error", "consistent"],
        "comma-dangle": [2, "always-multiline"],
        "no-multi-spaces": ["error", {
            "exceptions": {
                "VariableDeclarator": true,
            },
        }],
        "radix": ["error", "as-needed"],
        "func-names": 0,
        "max-len": [2, 120, 2, {
            ignoreUrls: true,
            ignoreComments: false,
        }],
    },
};

# eslint-config-videoamp
[![npm version](https://badge.fury.io/js/eslint-config-videoamp.svg)](https://badge.fury.io/js/eslint-config-videoamp)

This package uses ESLint to enforce VideoAmp's code style and provides a shared base configuration for our Typescript projects.

## Install
### `yarn`
```sh
yarn add eslint-config-videoamp eslint --dev
```

## Usage
Create a .eslintrc file in base of your project:

### For Node Projects
```js
{
    extends: 'videoamp'
}
```

### For React Projects
```js
{
    extends: 'videoamp/react'
}
```

## Enabling Prettier
Add `"prettier": "eslint-config-videoamp/prettier.config"` to your `package.json`.

## Contributing
You can make sure this module lints with itself using `yarn lint`.

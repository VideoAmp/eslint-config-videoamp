# eslint-config-videoamp
This package uses ESLint to enforce VideoAmp's code style and provides a shared base configuration for our Typescript projects.

## Install
### `yarn`
```sh
yarn add eslint-config-videoamp eslint --dev
```

## Usage

### For Node Projects
Add `"extends": "eslint-config-videoamp"` to your `.eslintrc`.

### For React Projects
Add `"extends": "eslint-config-videoamp/react"` to your `.eslintrc`.

### Enabling Prettier
Add `"prettier": "eslint-config-videoamp/prettier.config` to your `package.json`.

## Contributing
You can make sure this module lints with itself using `yarn lint`.

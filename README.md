# eslint-config-videoamp

This package extends Airbnb's styleguide with VideoAmp's code style, and provides an extensible shared config.

## Install
```sh
npm install --save-dev git://github.com/VideoAmp/eslint-config-videoamp.git eslint
```
> TODO: Publish to npm registry.

## Usage

We export two ESLint configurations for our usage.

### eslint-config-videoamp

Our default export contains all of Airbnb's ES6 lint rules with our custom configuration.

Add `"extends": "videoamp"` to your .eslintrc

### eslint-config-videoamp/es5

Contains all of Airbnb's legacy (ES5 and below) lint rules with our custom configuration.

Add `"extends": "videoamp/es5"` to your .eslintrc

## Resources
See [Airbnb's overarching ESLint config](https://npmjs.com/eslint-config-airbnb), [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript), and the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## Contributing

You can make sure this module lints with itself using `npm run lint`.

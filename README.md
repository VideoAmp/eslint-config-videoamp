# eslint-config-videoamp
[![Build Status](https://semaphoreci.com/api/v1/videoamp/eslint-config-videoamp/branches/master/badge.svg)](https://semaphoreci.com/videoamp/eslint-config-videoamp)
[![npm version](https://badge.fury.io/js/eslint-config-videoamp.svg)](https://badge.fury.io/js/eslint-config-videoamp)

This package uses ESLint to enforce VideoAmp's code style and provides a shared base configuration for our JavaScript projects.

We have two other configurations that we primarily use that extend this base, listed below:
- [`eslint-config-videoamp-react`](https://github.com/VideoAmp/eslint-config-videoamp-react) - Provides extended rules for VideoAmp React projects.
- [`eslint-config-videoamp-node`](https://github.com/VideoAmp/eslint-config-videoamp-node) - Provides extended rules for VideoAmp Node.js projects.

## Install
### `yarn`
```sh
yarn add --dev eslint-config-videoamp eslint
```
### `npm`
```sh
npm install --save-dev eslint-config-videoamp eslint
```

## Usage
Add `"extends": "videoamp"` to your `.eslintrc`.

## Legacy `eslint-config-videoamp` for ES5 projects
For projects that use ES5, see documentation from the `v2.1.0` config [here](https://github.com/VideoAmp/eslint-config-videoamp/blob/master/README.md#eslint-config-videoampes5).

## Resources
- [ESLint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [`eslint-plugin-fp`](https://github.com/jfmengels/eslint-plugin-fp)
- [`eslint-plugin-promise`](https://github.com/xjamundx/eslint-plugin-promise)
- [`eslint-plugin-chai-expect`](https://github.com/turbo87/eslint-plugin-chai-expect)

## Contributing
You can make sure this module lints with itself using `yarn lint`.

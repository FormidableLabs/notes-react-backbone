Tasks
=====

## Current

* Add gzip compress for Express - http://inspiredjw.com/do-not-forget-to-use-gzip-for-express/
    * Add a simple CURL helper to get gzipped size from `js-dist/bundle.js`
* Add HBS whitespace stripping.
* Make `__mode` not work in `production`.
* Change repo name to `notes-react-backbone`.
* Start `notes-func-test` for impl-independent functional tests (hook to dev. server + sqlite in memory.)
* Gulp: Switch to jsxhint or maybe eslint?

## notes-react-ampersand

* Switch to ampersand components.
* Look to `react-router`
* Replace Underscore with es5-shim / make sure we do polyfills right.
    * E.g., I have lots of `.bind()` around.

## Later

* Make sure tests pass.
* Implement / switch LS/no-server-side for `gh-pages` vs normal.

## Notes

* Maybe use an integration library:
    * https://github.com/jhudson8/react-backbone
    * https://github.com/clayallsopp/react.backbone
    * https://github.com/magalhas/backbone-react-component

* Examples:
    * https://github.com/jhudson8/http-dictionary

## Issues

* React Components need to be imported to work, but with JsHint ignoring
  JSX stuff, you can't tell from unused stuff.

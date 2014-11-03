Tasks
=====

## Current

* Get `NODE_ENV` working for React (silence warnings).

* Add documentation to README.md.

## notes-react-ampersand

* Switch to ampersand components.
* Replace Underscore with es5-shim / make sure we do polyfills right.
    * E.g., I have lots of `.bind()` around.

## Later

* Make sure tests pass.
* Gulp: Switch to jsxhint or maybe eslint?
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

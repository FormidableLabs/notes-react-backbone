Tasks
=====

## Current

* Add documentation to README.md.
* Remove jQuery? (Go for ie8 compat).

* Switch to ampersand components.
* Replace Underscore with es5-shim / make sure we do polyfills right.
    * E.g., I have lots of `.bind()` around.

* Implement / switch LS/no-server-side for `gh-pages` vs normal.

## notes-react-ampersand

## Later

* Make sure tests pass.
* Gulp: Switch to jsxhint or maybe eslint?

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

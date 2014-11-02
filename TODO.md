Tasks
=====

## Current

* Investigate / implement server-side rendering.

* Do a webpack build for all of bootstrap (css, etc. too).
* Hone down static serve to just needed stuff (e.g., no "node_modules")
* Webpack: New uglify options form.

* Add documentation to README.md.
* Make sure tests pass.
* Gulp: Switch to jsxhint or maybe eslint?

* Replace Underscore with es5-shim / make sure we do polyfills right.
    * E.g., I have lots of `.bind()` around.
* Remove HTML `id` attributes and use React conventions (?)
* Remove jQuery? (Go for ie8 compat).

* Implement / switch LS/no-server-side for `gh-pages` vs normal.
* Switch to ampersand components.

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

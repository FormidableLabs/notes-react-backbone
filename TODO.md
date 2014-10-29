Tasks
=====

## Current

* Add documentation to README.md.
* Investigate / implement server-side rendering.
* Make sure tests pass.
* Implement / switch LS/no-server-side for `gh-pages` vs normal.
* Webpack: New uglify options form.
* Gulp: Switch to jsxhint.
* Remove `app-OLD-DELETE`
* Replace Underscore with es5-shim / make sure we do polyfills right.
* Remove HTML `id` attributes and use React conventions (?)


## Questions

* Am I better off showing/hiding two DOM containers, or re-creating them in React?

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

Notes - React
=============

A version of Notes written using [React][react] and [CommonJS][cjs], built with
[Webpack][webpack].

## Application

Notes is now client-side **and** server-side rendered thanks to the magic of
React. The app uses:

* React for view logic.
* Backbone for models, collections and routers.
* Lodash for Backbone and utilities.
* Markdown JS for markdown conversion.
* Bootstrap for CSS (not JS).

Notably, the app does _not_ include:

* Bootstrap JS
* jQuery

Instead relying on React to mostly take care of DOM work with a little bit
of VanillaJS.

## Development

### Dev Mode

Install, setup.

```
$ npm install
$ ./scripts/init-db.js
```

Run the watchers, dev and source maps servers

```
$ gulp dev
```

URLS to test things out:

* `http://127.0.0.1:3000/`: Server-side bootstrap, JS takes over.
* `http://127.0.0.1:3000/?__mode=noss`: Pure JS.
* `http://127.0.0.1:3000/?__mode=nojs`: Pure server-side. Note that while
  some links may work (e.g. clicking on a note title in list), many things
  do not since there are absolutely no JS libraries. This is intended to just
  be a small demo of SEO / "crawlable" content.

### Production

Install, setup.

```
$ npm install --production
$ npm run-script build
$ ./scripts/init-db.js
```

Run the server.

```
$ node server/index.js
```

## TODO - Rest of Documentation

[react]: http://facebook.github.io/react/
[cjs]: http://wiki.commonjs.org/wiki/CommonJS
[webpack]: http://webpack.github.io/

Notes - React
=============

A version of Notes written using [React][react] and [CommonJS][cjs], built with
[Webpack][webpack].

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

Navigate to: http://127.0.0.1:3000/

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

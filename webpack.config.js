/**
 * Webpack configuration
 */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  cache: true,
  context: path.join(__dirname, "client"),
  entry: "./app.js",
  output: {
    path: path.join(__dirname, "app/js-dist"),
    filename: "bundle.js"
  },
  optimize: {
    minimize: true
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader" },
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ]
  },
  resolve: {
    alias: {
      "underscore": "lodash/dist/lodash.underscore"
    }
  },
  plugins: [
    // Globals.
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    // Manually do source maps to use alternate host.
    new webpack.SourceMapDevToolPlugin(
      "bundle.js.map",
      "\n//# sourceMappingURL=http://127.0.0.1:3001/app/js-dist/[url]")
  ]
};

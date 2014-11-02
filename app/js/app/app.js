/** @jsx React.DOM */
/**
 * Entry point.
 */
/*jshint unused:false */
var $ = require("jquery");
var Backbone = require("backbone");
var React = require("react");

// jQuery: Backbone needs explicit set.
Backbone.$ = $;

// Side-effect: Add in bootstrap.js (uses `window.jQuery` from config).
require("bootstrap/dist/js/bootstrap");

var NotesCollection = require("./collections/notes");
var Router = require("./routers/router");

// Initialize application components.
var collection = NotesCollection.getInstance();

// Wait until we have our initial collection from the backing
// store before firing up the router.
collection.once("reset", function () {
  var router = new Router();
  Backbone.history.start({
    pushState: true,
    hashChange: false
  });
});

// Now fetch collection data, kicking off everything.
collection.fetch({ reset: true });

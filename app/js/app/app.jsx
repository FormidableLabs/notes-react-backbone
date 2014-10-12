/** @jsx React.DOM */
/**
 * Entry point.
 */
var $ = require("jquery");
var Backbone = require("backbone");
var React = require("react");

// jQuery: Backbone needs explicit set and bootstrap needs global. (Sigh).
// TODO(REACT): Try to remove this / move to webpack config.
Backbone.$ = $;

// Side-effect: Add in bootstrap.js
// TODO(REACT): Try to remove this / move to webpack config.
require("bootstrap/dist/js/bootstrap");

var NotesCollection = require("./collections/notes");
var Notes = require("./views/notes.jsx");

// Initialize application components.
// The collection object comes first as views depend on it.
var collection = NotesCollection.getInstance();

// Wait until we have our initial collection from the backing
// store before firing up the router.
collection.once("reset", function () {
  Backbone.history.start();

  React.renderComponent(
    /*jshint ignore:start */
    <Notes notes={collection} />,
    /*jshint ignore:end */
    $(".container")[0]
  );
});

// Now fetch collection data, kicking off everything.
collection.fetch({ reset: true });

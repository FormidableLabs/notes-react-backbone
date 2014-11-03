/** @jsx React.DOM */
/**
 * Entry point.
 */
/*jshint unused:false */
var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
// Import bootstrap.
require("bootstrap/dist/js/bootstrap");

var React = require("react");
var NotesCollection = require("./collections/notes");
var Router = require("./routers/router");
var collection = NotesCollection.getInstance();

// ----------------------------------------------------------------------------
// Startup
// ----------------------------------------------------------------------------
// Helper: Start up app.
var _startApp = function () {
  var router = new Router();
  Backbone.history.start({
    pushState: true,
    hashChange: false
  });
};

// ----------------------------------------------------------------------------
// Bootstrap / Initialization
// ----------------------------------------------------------------------------
// Initial data from page.
var initialData;
try {
  initialData = JSON.parse($("#initial-data").html());
} catch (err) {}

// Wait until we have our initial collection from the backing
// store before firing up the router.
collection.once("reset", _startApp);

if (initialData) {
  // Bootstrap
  collection.reset(initialData);
} else {
  // Otherwise, fetch collection data, kicking off everything.
  collection.fetch({ reset: true });
}

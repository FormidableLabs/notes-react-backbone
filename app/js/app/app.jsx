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
window.jQuery = $;

// Side-effect: Add in bootstrap.js
// TODO(REACT): Try to remove this / move to webpack config.
require("bootstrap/dist/js/bootstrap");

var NotesCollection = require("./collections/notes");

var NoteItem = React.createClass({
  render: function () {
    /*jshint ignore:start */
    return (
      <tr>
        <td className="note-name">
          <div className="note-title note-view">{this.props.item.title}</div>
        </td>
        <td className="note-action">
          <div className="btn-group btn-group-sm pull-right">
            <button className="btn btn-default note-edit">
              <span className="glyphicon glyphicon-pencil"></span>
            </button>
            <button className="btn btn-default note-delete">
              <span className="glyphicon glyphicon-trash"></span>
            </button>
          </div>
        </td>
      </tr>
    );
    /*jshint ignore:end */
  }
});

$(function () {
  // Initialize application components.
  // The collection object comes first as views depend on it.
  var collection = NotesCollection.getInstance();

  // Wait until we have our initial collection from the backing
  // store before firing up the router.
  collection.once("reset", function () {
    Backbone.history.start();

    React.renderComponent(
      /*jshint ignore:start */
      <NoteItem item={collection.at(0).toJSON()} />,
      /*jshint ignore:end */
      $("#notes-list tbody")[0]
    );
  });

  // Now fetch collection data, kicking off everything.
  collection.fetch({ reset: true });
});


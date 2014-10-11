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

var NotesItem = React.createClass({
  render: function () {
    /*jshint ignore:start */
    return (
      <tr className="notes-item">
        <td className="note-name">
          <div className="note-title note-view">{this.props.note.get("title")}</div>
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

var Notes = React.createClass({
  render: function () {
    /*jshint ignore:start */

    var noteNodes = this.props.notes.map(function (note) {
      return (
        <NotesItem note={note} key={note.get("id")} />
      );
    });

    return (
      <div id="notes" className="region region-notes">
        <table id="notes-list" className="table table-curved table-hover">
          <tbody>
            <tr className="notes-new">
              <td className="note-name">
                <input id="note-new-input"
                       className="form-control"
                       placeholder="Write a new note." autofocus />
              </td>
              <td className="note-action">
                <button id="note-create"
                        type="button"
                        className="btn btn-default btn-sm pull-right">
                  <span className="glyphicon glyphicon-plus"></span>
                </button>
              </td>
            </tr>
            {noteNodes}
          </tbody>
        </table>
      </div>
    );
    /*jshint ignore:end */
  }
});




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

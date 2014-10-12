/** @jsx React.DOM */
/**
 * Notes View
 *
 * Displays a list of notes.
 *
 * Contains:
 * - "/app/views/notes-filter": Child view for query filter.
 * - "/app/views/notes-item": Child view for single note listing.
 */
/*jshint unused:false */
var React = require("react");
var NotesItem = require("./notes-item.jsx");

module.exports = React.createClass({
  render: function () {
    var noteNodes = this.props.notes.map(function (note) {
      return (/*jshint ignore:start */
        <NotesItem note={note} key={note.get("id")} />
      /*jshint ignore:end */);
    });

    return (/*jshint ignore:start */
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
    /*jshint ignore:end */);
  }
});

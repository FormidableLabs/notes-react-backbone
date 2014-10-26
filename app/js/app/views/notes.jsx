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

var ENTER = 13;

module.exports = React.createClass({
  // --------------------------------------------------------------------------
  // State
  // --------------------------------------------------------------------------
  getInitialState: function() {
    return { newNote: "" };
  },

  // Update new note value on changes.
  updateNewNote: function (ev) {
    this.setState({ newNote: ev.target.value });
  },

  // --------------------------------------------------------------------------
  // Note / Events
  // --------------------------------------------------------------------------
  // Create note on enter key.
  enterNote: function (ev) {
    if (ev.which === ENTER) {
      ev.stopPropagation();
      this.createNote();
    }
  },

  createNote: function (ev) {
    window.console.log("TODO HERE createNote", this.state.newNote);
  },

  // --------------------------------------------------------------------------
  // Render
  // --------------------------------------------------------------------------
  // Add single child note view to end of notes list.
  addNote: function (note) {
    return (/*jshint ignore:start */
      <NotesItem note={note} key={note.get("id")} />
    /*jshint ignore:end */);
  },

  // Render.
  render: function () {
    var noteNodes = this.props.notes.map(this.addNote);

    return (/*jshint ignore:start */
      <div id="notes" className="region region-notes">
        <table id="notes-list" className="table table-curved table-hover">
          <tbody>
            <tr className="notes-new">
              <td className="note-name">
                <input className="form-control"
                       placeholder="Write a new note."
                       value={this.state.newNote}
                       onKeyPress={this.enterNote}
                       onChange={this.updateNewNote}
                       autofocus />
              </td>
              <td className="note-action">
                <button id="note-create"
                        type="button"
                        className="btn btn-default btn-sm pull-right"
                        onClick={this.createNote}>
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

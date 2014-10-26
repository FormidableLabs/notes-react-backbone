/** @jsx React.DOM */
/**
 * Notes Item View
 *
 * A single note within a list of notes.
 */
/*jshint unused:false */
var React = require("react");

module.exports = React.createClass({

  viewNote: function () {
    window.console.log("TODO viewNote", this.props.note);
  },
  editNote: function () {
    window.console.log("TODO editNote", this.props.note);
  },
  deleteNote: function () {
    window.console.log("TODO deleteNote", this.props.note);
  },

  render: function () {
    return (/*jshint ignore:start */
      <tr id={this.props.note.id}
          className="notes-item">
        <td className="note-name">
          <div className="note-title note-view"
               onClick={this.viewNote}>
            {this.props.note.get("title")}
          </div>
        </td>
        <td className="note-action">
          <div className="btn-group btn-group-sm pull-right">
            <button className="btn btn-default note-edit"
                    onClick={this.editNote}>
              <span className="glyphicon glyphicon-pencil"></span>
            </button>
            <button className="btn btn-default note-delete"
                    onClick={this.deleteNote}>
              <span className="glyphicon glyphicon-trash"></span>
            </button>
          </div>
        </td>
      </tr>
    /*jshint ignore:end */);
  }
});

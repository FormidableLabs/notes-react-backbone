/** @jsx React.DOM */
/**
 * Notes Item View
 *
 * A single note within a list of notes.
 */
var React = require("react");
var Backbone = require("backbone");

module.exports = React.createClass({

  // [BB] Navigation, models.
  viewNote: function () {
    var loc = ["note", this.props.note.id, "view"].join("/");
    Backbone.history.navigate(loc, { trigger: true });
  },
  editNote: function () {
    var loc = ["note", this.props.note.id, "edit"].join("/");
    Backbone.history.navigate(loc, { trigger: true });
  },
  deleteNote: function () {
    this.props.note.destroy();
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

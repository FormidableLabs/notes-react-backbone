/** @jsx React.DOM */
/**
 * Notes Item View
 *
 * A single note within a list of notes.
 */
/*jshint unused:false */
var React = require("react");

module.exports = React.createClass({
  // TODO: REMOVE.
  TODO: function (key) {
    var self = this;
    return function () {
      window.console.log("TODO " + key, self.props.note);
    };
  },

  render: function () {
    return (/*jshint ignore:start */
      <tr id={this.props.note.id}
          className="notes-item">
        <td className="note-name">
          <div className="note-title note-view"
               onClick={this.TODO("VIEW")}>
            {this.props.note.get("title")}
          </div>
        </td>
        <td className="note-action">
          <div className="btn-group btn-group-sm pull-right">
            <button className="btn btn-default note-edit"
                    onClick={this.TODO("EDIT")}>
              <span className="glyphicon glyphicon-pencil"></span>
            </button>
            <button className="btn btn-default note-delete"
                    onClick={this.TODO("DELETE")}>
              <span className="glyphicon glyphicon-trash"></span>
            </button>
          </div>
        </td>
      </tr>
    /*jshint ignore:end */);
  }
});

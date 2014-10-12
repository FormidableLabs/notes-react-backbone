/** @jsx React.DOM */
/**
 * Notes Item View
 *
 * A single note within a list of notes.
 */
/*jshint unused:false */
var React = require("react");

module.exports = React.createClass({
  render: function () {
    return (/*jshint ignore:start */
      <tr className="notes-item">
        <td className="note-name">
          <div className="note-title note-view">
            {this.props.note.get("title")}
          </div>
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
    /*jshint ignore:end */);
  }
});

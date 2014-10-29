/** @jsx React.DOM */
/**
 * Note View - Edit
 */
var React = require("react");

module.exports = React.createClass({
  render: function () {
    return (/*jshint ignore:start */
      <div id="note">
        <div id="note-pane-edit" className="pane">
          <form id="note-form-edit" role="form">
            <div className="form-group">
              <input id="input-title" className="form-control"
                     type="text" placeholder="title"
                     value={this.props.note.get("title")} />
            </div>
            <div className="form-group">
              <textarea id="input-text" className="form-control"
                        rows="15"
                        value={this.props.note.get("text")} />
            </div>
          </form>
        </div>
      </div>
    /*jshint ignore:end */);
  }
});

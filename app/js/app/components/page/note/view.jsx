/** @jsx React.DOM */
/**
 * Note View - View
 */
var React = require("react");

module.exports = React.createClass({
  render: function () {
    return (/*jshint ignore:start */
      <div id="note-pane-view" className="pane">
        <div id="note-pane-view-content"></div>
      </div>
    /*jshint ignore:end */);
  }
});

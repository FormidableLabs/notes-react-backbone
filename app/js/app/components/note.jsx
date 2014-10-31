/** @jsx React.DOM */
/**
 * Note full page.
 */
 /*jshint unused:false */
var React = require("react");
var NoteNav = require("./nav/note.jsx");
var NotePage = require("./page/note.jsx");

module.exports = React.createClass({
  render: function () {
    return (/*jshint ignore:start */
      <div>
        <NoteNav note={this.props.note} />
        <NotePage note={this.props.note} />
      </div>
    /*jshint ignore:end */);
  }
});

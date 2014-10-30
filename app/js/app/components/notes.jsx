/** @jsx React.DOM */
/**
 * Notes full page.
 */
 /*jshint unused:false */
var React = require("react");
var NotesPage = require("./page/notes.jsx");

module.exports = React.createClass({
  render: function () {
    /*jshint ignore:start */
    return (<NotesPage notes={this.props.notes} />);
    /*jshint ignore:end */
  }
});

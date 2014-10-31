/** @jsx React.DOM */
/**
 * Notes full page.
 */
 /*jshint unused:false */
var React = require("react");
var NotesNav = require("./nav/notes.jsx");
var NotesPage = require("./page/notes.jsx");

module.exports = React.createClass({
  render: function () {
    return (/*jshint ignore:start */
      <div>
        <NotesNav notes={this.props.notes} />
        <NotesPage notes={this.props.notes} />
      </div>
    /*jshint ignore:end */);
  }
});

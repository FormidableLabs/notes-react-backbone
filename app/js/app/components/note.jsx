/** @jsx React.DOM */
/**
 * Note full page.
 */
 /*jshint unused:false */
var React = require("react");
var NotePage = require("./page/note.jsx");

module.exports = React.createClass({
  render: function () {
    /*jshint ignore:start */
    return (<NotePage note={this.props.note} />);
    /*jshint ignore:end */
  }
});

/** @jsx React.DOM */
/**
 * Note Navigation Bar View
 *
 * Controls note nav bar and emits navigation events.
 */
/*jshint unused:false */
var React = require("react");

module.exports = React.createClass({
  // --------------------------------------------------------------------------
  // Events
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Render
  // --------------------------------------------------------------------------
  render: function () {
    return (/*jshint ignore:start */
      <ul id="note-nav" className="nav navbar-nav">
        <li className="note-view active">
          <a href="#">
            <span className="glyphicon glyphicon-file"></span>
            <span className="hidden-phone-portrait">View</span>
          </a>
        </li>
        <li className="note-edit">
          <a href="#">
            <span className="glyphicon glyphicon-pencil"></span>
            <span className="hidden-phone-portrait">Edit</span>
          </a>
        </li>
        <li className="note-delete">
          <a href="#">
            <span className="glyphicon glyphicon-trash"></span>
            <span className="hidden-phone-portrait">Delete</span>
          </a>
        </li>
      </ul>
    /*jshint ignore:end */);
  }
});

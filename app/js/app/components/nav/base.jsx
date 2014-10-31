/** @jsx React.DOM */
/**
 * Base nav component.
 */
var React = require("react");

module.exports = React.createClass({
  render: function () {
    return (/*jshint ignore:start */
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav-target">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Notes</a>
        </div>

        <div className="collapse navbar-collapse" id="nav-target">
          {this.props.children}
        </div>
      </nav>
    /*jshint ignore:end */);
  }
});

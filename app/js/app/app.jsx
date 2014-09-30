/** @jsx React.DOM */
/**
 * Entry point.
 */
var $ = require("jquery");
var React = require("react");

var Hello = React.createClass({
  render: function () {
    /*jshint ignore:start */
    return (
      <div className="hello">
        Hello, world!
      </div>
    )
    /*jshint ignore:end */
  }
});

React.renderComponent(
  /*jshint ignore:start */
  <Hello />,
  /*jshint ignore:end */
  $(".container")[0]
);

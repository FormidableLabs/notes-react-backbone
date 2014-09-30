/** @jsx React.DOM */
/**
 * Entry point.
 */
var $ = require("jquery");
var React = require("react");

var Hello = React.createClass({
  render: function () {
    return (
      <div className="hello">
        Hello, world!
      </div>
    );
  }
});

React.renderComponent(
  <Hello />,
  $(".container")[0]
);

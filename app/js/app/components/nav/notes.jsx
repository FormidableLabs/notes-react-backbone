/** @jsx React.DOM */
/**
 * Notes Navigation Bar View
 *
 * Controls notes nav bar and emits navigation events.
 */
/*jshint unused:false */
var React = require("react");
var Base = require("./base.jsx");

module.exports = React.createClass({
  // --------------------------------------------------------------------------
  // Events
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Render
  // --------------------------------------------------------------------------
  render: function () {
    window.console.log("TODO HERE ACTION", this.props.action);
    return (/*jshint ignore:start */
      <Base>
        <form className="nav navbar-nav navbar-right navbar-form-nonresp navbar-search"
              role="search">
          <div className="form-group">
            <input type="text" className="search-query form-control"
                   placeholder="Filter" />
          </div>
        </form>
      </Base>
    /*jshint ignore:end */);
  }
});

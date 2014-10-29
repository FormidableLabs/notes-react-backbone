/** @jsx React.DOM */
/**
 * Notes Navigation Bar View
 *
 * Controls notes nav bar and emits navigation events.
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
      <form className="nav navbar-nav navbar-right navbar-form-nonresp navbar-search"
            role="search">
        <div className="form-group">
          <input type="text" className="search-query form-control"
                 placeholder="Filter" />
        </div>
      </form>
    /*jshint ignore:end */);
  }
});

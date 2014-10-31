/** @jsx React.DOM */
/**
 * Note Navigation Bar View
 *
 * Controls note nav bar and emits navigation events.
 */
/*jshint unused:false */
var React = require("react");
var Backbone = require("backbone");
var Base = require("./base.jsx");

module.exports = React.createClass({
  // --------------------------------------------------------------------------
  // State
  // --------------------------------------------------------------------------
  getInitialState: function() {
    return { action: this.props.action };
  },

  // --------------------------------------------------------------------------
  // Events
  // --------------------------------------------------------------------------
  // [BB] Navigation, models.
  // TODO: Consider combining with notes view.
  viewNote: function (ev) {
    ev.preventDefault();
    this.setState({ action: "view" });
  },
  editNote: function (ev) {
    ev.preventDefault();
    this.setState({ action: "edit" });
  },
  deleteNote: function (ev) {
    ev.preventDefault();
    this.props.note.destroy();
    Backbone.history.navigate("", { trigger: true });
  },

  // --------------------------------------------------------------------------
  // Render
  // --------------------------------------------------------------------------
  render: function () {
    return (/*jshint ignore:start */
      <Base>
        <ul id="note-nav" className="nav navbar-nav">
          <li className={"note-view" + (this.state.action === "view" ? " active" : "")}>
            <a href="#" onClick={this.viewNote}>
              <span className="glyphicon glyphicon-file"></span>
              <span className="hidden-phone-portrait">View</span>
            </a>
          </li>
          <li className={"note-edit" + (this.state.action === "edit" ? " active" : "")}>
            <a href="#" onClick={this.editNote}>
              <span className="glyphicon glyphicon-pencil"></span>
              <span className="hidden-phone-portrait">Edit</span>
            </a>
          </li>
          <li className="note-delete">
            <a href="#" onClick={this.deleteNote}>
              <span className="glyphicon glyphicon-trash"></span>
              <span className="hidden-phone-portrait">Delete</span>
            </a>
          </li>
        </ul>
      </Base>
    /*jshint ignore:end */);
  }
});

/** @jsx React.DOM */
/**
 * Note View
 *
 * A single note.
 */
/*jshint unused:false */
var React = require("react");
var NoteView = require("./note-view.jsx");
var NoteEdit = require("./note-edit.jsx");

module.exports = React.createClass({
  // --------------------------------------------------------------------------
  // Mount / Unmount
  // --------------------------------------------------------------------------
  // TODO: ABSTRACT OUT -- Model sync.
  // From: https://github.com/facebook/react/blob/1be9a9e/examples/
  //       todomvc-backbone/js/app.js#L148-L171
  componentDidMount: function() {
    // [BB] Add forceUpdate bindings.
    this.props.note.on("add change remove",
      this.forceUpdate.bind(this, null), this);
  },

  componentWillUnmount: function() {
    // [BB] Stop all listeners.
    this.props.note.off(null, null, this);
  },

  // --------------------------------------------------------------------------
  // State
  // --------------------------------------------------------------------------
  getInitialState: function() {
    return { action: this.props.action };
  },

  // --------------------------------------------------------------------------
  // Events
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Render
  // --------------------------------------------------------------------------
  render: function () {
    /*jshint ignore:start */
    return this.state.action === "view" ?
      (<NoteView note={this.props.note} />) :
      (<NoteEdit note={this.props.note} />);
    /*jshint ignore:end */
  }
});

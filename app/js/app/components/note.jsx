/** @jsx React.DOM */
/**
 * Note View
 *
 * A single note.
 */
/*jshint unused:false */
var React = require("react");
var NotesItem = require("./notes-item.jsx");

module.exports = React.createClass({
  // --------------------------------------------------------------------------
  // Mount / Unmount
  // --------------------------------------------------------------------------
  // TODO: ABSTRACT OUT -- Model sync.
  // From: https://github.com/facebook/react/blob/1be9a9e/examples/
  //       todomvc-backbone/js/app.js#L148-L171
  componentDidMount: function() {
    // [BB] Add forceUpdate bindings.
    this.props.note.on("add change remove", this.forceUpdate.bind(this, null), this);
  },

  componentWillUnmount: function() {
    // [BB] Stop all listeners.
    this.props.note.off(null, null, this);
  },

  // --------------------------------------------------------------------------
  // State
  // --------------------------------------------------------------------------
  getInitialState: function() {
    return { TODO: "" };
  },

  // --------------------------------------------------------------------------
  // Events
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Render
  // --------------------------------------------------------------------------
  // Render.
  render: function () {
    return (/*jshint ignore:start */
      <div id="note">
        // <div id="note-pane-view" className="pane">
        //   <div id="note-pane-view-content"></div>
        // </div>
        <div id="note-pane-edit" className="pane">
          <form id="note-form-edit" role="form">
            <div className="form-group">
              <input id="input-title" className="form-control"
                     type="text" placeholder="title"
                     value="{{title}}">
            </div>
            <div className="form-group">
              <textarea id="input-text" className="form-control"
                        rows="15">{{text}}</textarea>
            </div>
          </form>
        </div>
      </div>
    /*jshint ignore:end */);
  }
});

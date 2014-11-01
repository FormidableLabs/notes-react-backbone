/** @jsx React.DOM */
/**
 * Note View - Edit
 */
var React = require("react");

module.exports = React.createClass({

  componentDidMount: function() {
    var note = this.props.note;
    note.listenTo(note, "change", function () { note.save(); }); // [BB]
  },

  getInitialState: function() {
    return {
      title: this.props.note.title,
      text: this.props.note.text
    };
  },

  updateTitle: function (ev) {
    this.setState({ title: ev.target.value });
  },
  updateText: function (ev) {
    this.setState({ text: ev.target.value });
  },
  saveNote: function () {
    this.props.note.set({
      title: this.state.title,
      text: this.state.text
    });
  },

  render: function () {
    return (/*jshint ignore:start */
      <div id="note">
        <div id="note-pane-edit" className="pane">
          <form id="note-form-edit" role="form">
            <div className="form-group">
              <input id="input-title" className="form-control"
                     type="text" placeholder="title"
                     onChange={this.updateTitle}
                     onBlur={this.saveNote}
                     value={this.state.title} />
            </div>
            <div className="form-group">
              <textarea id="input-text" className="form-control"
                        rows="15"
                        onChange={this.updateText}
                        onBlur={this.saveNote}
                        value={this.state.text} />
            </div>
          </form>
        </div>
      </div>
    /*jshint ignore:end */);
  }
});

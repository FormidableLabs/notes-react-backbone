var React = require("react");
var Backbone = require("backbone");
var NotesView = React.createFactory(require("../components/notes.jsx"));
var NoteView = React.createFactory(require("../components/note.jsx"));
var NotesCollection = require("../collections/notes");

var rootEl = document.getElementById("content");

// Helpers
var _showPage = function (view) {
  React.unmountComponentAtNode(rootEl);
  React.render(view, rootEl);
};

// Router
// ------
// The router translates routes in to views.
module.exports = Backbone.Router.extend({

  routes: {
    "": "notes",
    "note/:id/:action": "note"
  },

  // Show notes list.
  notes: function () {
    _showPage(new NotesView({ notes: NotesCollection.getInstance() }));
  },

  // Common single note edit/view.
  note: function (noteId, action) {
    // Try to find note in existing collection.
    var model = NotesCollection.getInstance().get(noteId);
    if (!model) {
      // Go to home page on missing model.
      return this.navigate("", { trigger: true });
    }

    window.console.log("TODO USE ACTION", action);
    _showPage(new NoteView({ note: model, action: action }));
  }

});

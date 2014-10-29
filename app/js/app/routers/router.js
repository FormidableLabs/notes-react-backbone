var React = require("react");
var Backbone = require("backbone");
var NotesView = React.createFactory(require("../components/notes.jsx"));
var NotesNav = React.createFactory(require("../components/notes-nav.jsx"));
var NoteView = React.createFactory(require("../components/note.jsx"));
var NoteNav = React.createFactory(require("../components/note-nav.jsx"));
var NotesCollection = require("../collections/notes");

var pageEl = document.getElementById("page");
var navEl = document.getElementById("nav-target");

// Helpers
var _showPage = function (view, nav) {
  React.unmountComponentAtNode(pageEl);
  React.unmountComponentAtNode(navEl);
  React.render(view, pageEl);
  React.render(nav, navEl);
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
    var notesView = new NotesView({ notes: NotesCollection.getInstance() });
    var notesNav = new NotesNav();
    _showPage(notesView, notesNav);
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
    var noteView = new NoteView({ note: model });
    var noteNav = new NoteNav();
    _showPage(noteView, noteNav);
  }

});

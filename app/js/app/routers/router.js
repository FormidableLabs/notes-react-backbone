var React = require("react");
var Backbone = require("backbone");
var NotesView = React.createFactory(require("../components/notes.jsx"));
var NotesCollection = require("../collections/notes");
var page = document.getElementById("page");

// Helpers
var _showPage = function (view) {
  React.unmountComponentAtNode(page);
  React.render(view, page);
};

// Router
// ------
// The router translates routes in to views.
var Router = Backbone.Router.extend({

  routes: {
    "": "notes",
    "note/:id/:action": "note"
  },

  // Show notes list.
  notes: function () {
    _showPage(new NotesView({
      notes: NotesCollection.getInstance()
    }));
  },

  // Common single note edit/view.
  note: function (noteId, action) {
    window.console.log("NOTE", noteId, action);
  }

});

module.exports = Router;
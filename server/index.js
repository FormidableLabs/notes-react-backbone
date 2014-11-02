// Patch require.
require("node-jsx").install({ extension: ".jsx" });

// Server
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var sql = require("sqlite3");

var app = express();
var db = null;
var DB_PATH = __dirname + "/notes.sqlite";
var PORT = process.env.PORT || 3000;

// Client
var React = require("react");
var NotesView = React.createFactory(require("../client/components/notes.jsx"));
var NoteView = React.createFactory(require("../client/components/note.jsx"));
var NotesCollection = require("../client/collections/notes");

// ----------------------------------------------------------------------------
// Setup, Static Routes
// ----------------------------------------------------------------------------
app.use(bodyParser());
app.engine(".hbs", exphbs({
  extname: ".hbs"
}));
app.set("view engine", ".hbs");
app.set("views", __dirname + "/../templates");

// ----------------------------------------------------------------------------
// Static Routes
// ----------------------------------------------------------------------------
app.use("/app/js-dist/*.map", function (req, res) {
  res.send(404, "404"); // Prevent sourcemap serving.
});
app.use("/app/js-dist", express["static"]("app/js-dist"));
app.use("/bootstrap", express["static"]("node_modules/bootstrap/dist"));
app.use("/css", express["static"]("app/css"));

// ----------------------------------------------------------------------------
// API
// ----------------------------------------------------------------------------
var _errOrData = function (res, dataOverride) {
  return function (err, data) {
    if (err) {
      res.status(500).json({ error: err.message || err.toString() });
    }

    res.json(dataOverride || data);
  };
};

var _getAllNotes = function (cb) {
  db.prepare("select * from notes").all(cb);
};

app.get("/api/notes", function (req, res) {
  _getAllNotes(_errOrData(res));
});

app.post("/api/notes", function (req, res) {
  var title = req.body.title || "",
    text = req.body.text || "";

  db.run("insert into notes (title, text) values(?,?)", title, text)
    .prepare("select * from notes order by id desc limit 1")
    .get(_errOrData(res));
});

app.put("/api/notes/:id", function (req, res) {
  var title = req.body.title,
    text = req.body.text,
    id = req.params.id;

  db.run("update notes set title=?, text=? where id=?", title, text, id)
    .prepare("select * from notes where id=?", id)
    .get(_errOrData(res));
});

app["delete"]("/api/notes/:id", function (req, res) {
  db.run("delete from notes where id=?", req.params.id, _errOrData(res, {}));
});

// ----------------------------------------------------------------------------
// Dynamic Routes
// ----------------------------------------------------------------------------
// Common query params:
// * `__mode`: `noss` for "no server side html", `nojs` for "no client side".

app.get("/", function (req, res) {
  if (req.query.__mode === "noss") {
    // No server-side render.
    return res.render("index", { layout: false });
  }

  _getAllNotes(function (err, data) {
    if (err) {
      return res.status(500).send(err.message || err.toString() || "error");
    }

    // New collection from scratch for data for concurrency ease.
    var notesCol = new NotesCollection(data);
    var notesView = new NotesView({ notes: notesCol });
    var content = React.renderToString(notesView);

    // Render with bootstrapped data.
    res.render("index", {
      layout: false,
      noJs: req.query.__mode === "nojs",
      initialData: JSON.stringify(notesCol.toJSON()),
      content: content
    });
  });
});

app.get("/note/:id/:action", function (req, res) {
  if (req.query.__mode === "noss") {
    // No server-side render.
    return res.render("index", { layout: false });
  }

  _getAllNotes(function (err, data) {
    if (err) {
      return res.status(500).send(err.message || err.toString() || "error");
    }

    // New collection from scratch for data for concurrency ease.
    var notesCol = new NotesCollection(data);
    var noteModel = notesCol.get(req.params.id);
    if (!noteModel) {
      // Go to home page on missing note model.
      return res.redirect("/");
    }

    var noteView = new NoteView({
      note: noteModel,
      action: req.params.action
    });
    var content = React.renderToString(noteView);

    // Render with bootstrapped data.
    res.render("index", {
      layout: false,
      noJs: req.query.__mode === "nojs",
      initialData: JSON.stringify(notesCol.toJSON()),
      content: content
    });
  });
});

// ----------------------------------------------------------------------------
// Bootstrap
// ----------------------------------------------------------------------------
db = new sql.Database(DB_PATH, sql.OPEN_READWRITE, function () {
  app.listen(PORT);
});

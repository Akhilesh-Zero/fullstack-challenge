const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./contacts.db");

exports.getAllContacts = (req, res) => {
  const query = "SELECT * FROM contacts";

  db.all(query, [], (err, contacts) => {
    if (err) {
      return res.status(400).send("Error: " + err.message);
    }
    res.status(200).json(contacts);
  });
};

// Add more controller methods as needed using SQLite queries

const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3");

//Importing Routes
const contactsRouter = require("./routes/contacts");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// SQLite DB connection
const db = new sqlite3.Database("./contacts.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the database.");
});

// Initialize the database tables
const contactTableQuery = require("./models/contact");

db.exec(contactTableQuery, (err) => {
  if (err) {
    console.error("Error initializing contacts table:", err.message);
  } else {
    console.log("Contacts table initialized or already exists.");
  }
});

// Using Routes
app.use("/contacts", contactsRouter);

// Error Handlers
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

//General Error Handlers
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Close the database connection when the app is closing.
process.on("exit", () => {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Database connection Closed.");
  });
});

// Sample route
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

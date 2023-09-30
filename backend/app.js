const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3");
const contactsRouter = require("./routes/contacts");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/contacts", contactsRouter);

// SQLite DB connection
const db = new sqlite3.Database("./contacts.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the database.");
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

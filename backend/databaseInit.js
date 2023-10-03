const sqlite3 = require("sqlite3").verbose();

// Open the database (this will create a new SQLite file named mydb.sqlite3 if it doesn't exist)
const db = new sqlite3.Database("./mydb.sqlite3");

// Use serialize to ensure sequential execution of the commands
db.serialize(() => {
  // Create the contacts table if it doesn't exist
  db.run(`
        CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            username TEXT NOT NULL,
            email TEXT NOT NULL,
            street TEXT NOT NULL,
            suite TEXT,
            city TEXT NOT NULL,
            zipcode TEXT,
            lat TEXT,
            lng TEXT,
            phone TEXT NOT NULL,
            website TEXT,
            company_name TEXT,
            catchPhrase TEXT,
            bs TEXT
        );
    `);

  // Create the users table if it doesn't exist
  db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            password TEXT NOT NULL,  -- Assuming you want to store a hashed password
            email TEXT NOT NULL,
            firstName TEXT,
            lastName TEXT,
            role TEXT DEFAULT 'user'
        );
    `);
});

// Close the database connection
db.close();

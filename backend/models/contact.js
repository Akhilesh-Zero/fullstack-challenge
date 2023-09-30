const createTableQuery = `
CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    website TEXT,
    companyName TEXT
);
`;

module.exports = createTableQuery;

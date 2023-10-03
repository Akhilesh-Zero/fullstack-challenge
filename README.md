# fullstack-challenge

# Contact Manager Application 📖

## 🌟 Features

- **User Authentication**: Secure login mechanism.
- **Contact Management**: Add, view, modify, or delete contacts based on permissions.
- **Intuitive UI**: User-friendly interface, seamless navigation.

## 🚀 Getting Started

### Prerequisites 📝

- **Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed (`node -v` to verify).
- **SQLite3**: Our database of choice. Install the SQLite3 command-line utilities. See [SQLite's download page](https://sqlite.org/download.html).
- **Yarn or npm**: Node.js package managers. Commands below use `npm`, but `yarn` can be a substitute.

### Installation 🔧

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Akhilesh-Zero/fullstack-challenge.git
   cd fullstack-challenge
   ```
2. **Install Dependencies frontend**:
   ```bash
   cd ./frontend
   npm install
   ```
3. **Install Dependencies backend**:
   ```bash
   cd ./backend
   npm install
   ```
4. **Initialize Database**: Initialize and seed the database with some initial data:
   ```bash
   cd ./backend
   node databaseInit.js
   ```
5. **Launch Backend Server**:
   ```bash
   cd ./backend
   node app.js
   ```
6. **Start the Frontend** (in a separate terminal):
   ```bash
   cd ./frontend
   npm start
   ```
7. **Open the Application**: Head over to `http://localhost:3000`.

## 🎯 Usage

### Initial Data 📋

- **Default User**:
  - **Username**: `BruceWayne`
  - **Password**: `IamBatman`
  - **Email**: `bruce@wayneenterprises.com`
- **Sample Contacts**:
  - `Clark Kent` (Superman) from Daily Planet, Metropolis.
  - `Diana Prince` (WonderWoman) from Amazon Warriors, Themyscira.
  - `Bruce Wayne` (Batman) from Wayne Enterprises, Gotham.

## Assumptions
- **Authentication:** 
  - It's assumed that each user will have a unique username, and there is no multi-factor authentication implemented.
- **Database Integrity:** 
  - The application assumes that the underlying database will handle issues related to data integrity.
- **Concurrency:** 
  - The application does not handle concurrency issues, assuming that multiple simultaneous updates to a contact will be rare.
- **User Input:** 
  - It's assumed that users provide valid data inputs. While basic validations are in place, exhaustive input checks are not implemented.
- **Environment:** 
  - The application assumes a stable internet connection and modern browser environment for frontend interactions.

## Testing & Use Cases

1. **Add Contact:**
   - **✔️ Positive Case:** Users should be able to add a contact by filling out all required fields and clicking the submit button. After submission, the new contact should appear in the contact list.
   - **❌ Negative Case:** If a user tries to submit the form with missing or invalid data, an error message should be displayed.

2. **Edit Contact:**
   - **✔️ Positive Case:** Users should be able to edit an existing contact, modify its details, and save the changes. Modified details should reflect immediately in the contact list.
   - **❌ Negative Case:** Trying to save with incomplete or invalid details should prompt an error message.

3. **Login/Authentication:**
   - **✔️ Positive Case:** A user should be able to login using valid credentials. Once logged in, the user should be able to access functionalities restricted to authenticated users.
   - **❌ Negative Case:** Using incorrect credentials should display an error message and not grant access to restricted functionalities.

4. **Search Contacts:**
   - **✔️ Positive Case:** Users should be able to input a search term and see contacts filtered based on the term in real-time.
   - **❌ Negative Case:** A search for a non-existent contact should return an empty list or an appropriate message.

5. **Delete Contact:(Not implemented)**
   - **✔️ Positive Case:** Users should be able to select and delete an existing contact. The contact should immediately disappear from the list.
   - **❌ Negative Case:** Attempting to delete a non-existent contact (possibly already deleted in another session) should provide a relevant error message.

6. **View Contact Details:**
   - **✔️ Positive Case:** Clicking on a contact name should expand its details for the user to view.
   - **❌ Negative Case:** If, for some reason, contact details are not available, an appropriate error message or placeholder should be shown.

### Application Features 🔍

- **View Contacts**: Navigate to the homepage to view all contacts. Expand contact details by clicking on names.
- **Add Contacts**: Use the "Add Contact" button.
- **Edit Contacts**: After logging in with Bruce Bayne, contacts from the "internal" source become editable.
- **Login**: Access through the "Login" link. Bruce Bayne's credentials allow viewing/editing of "internal" contacts.

## ⚙️ Tech Stack

- **Frontend**: React.js
- **Backend**: Express.js
- **Database**: SQLite3 (with Sequelize ORM)

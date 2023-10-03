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

### Application Features 🔍

- **View Contacts**: Navigate to the homepage to view all contacts. Expand contact details by clicking on names.
- **Add Contacts**: Use the "Add Contact" button.
- **Edit Contacts**: After logging in with Bruce Bayne, contacts from the "internal" source become editable.
- **Login**: Access through the "Login" link. Bruce Bayne's credentials allow viewing/editing of "internal" contacts.

## ⚙️ Tech Stack

- **Frontend**: React.js
- **Backend**: Express.js
- **Database**: SQLite3 (with Sequelize ORM)

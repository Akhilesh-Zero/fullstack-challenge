import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="header">
          <h1>Contact</h1>
          <button className="user-icon-btn">
            <i className="fas fa-user"></i> {/* Placeholder for future login */}
          </button>
        </div>

        <Switch>
          <Route path="/" exact>
            <ContactList />
          </Route>
          <Route path="/add">
            <AddContact />
          </Route>
          {/* Add future routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

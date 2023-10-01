import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App() {
  return (
    <Router>
      <div>
        <h1>Contact List</h1>
        <Switch>
          <Route path="/" exact component={ContactList} />
          <Route path="/add" component={AddContact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

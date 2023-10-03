import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from "./UserContext";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Layout from "./Layout";
import UserPage from "./UserPage";
import EditContact from "./EditContact";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("username")
  );

  const login = (username) => {
    localStorage.setItem("username", username);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
  };

  return (
    <UserProvider value={{ isLoggedIn, login, logout }}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <ContactList />
            </Route>
            <Route path="/add">
              <AddContact />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/user" exact component={UserPage} />
            <Route path="/edit/:id" component={EditContact} />
            {/* Add future routes as needed */}
          </Switch>
        </Layout>
      </Router>
    </UserProvider>
  );
}

export default App;

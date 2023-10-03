import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
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

  useEffect(() => {
    // This effect will run every time the value of localStorage's 'username' changes.
    setIsLoggedIn(!!localStorage.getItem("username"));
  }, [localStorage.getItem("username")]);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";

function ContactHeader() {
  const { isLoggedIn, logout } = useContext(UserContext);
  const history = useHistory();

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      history.push("/user");
    } else {
      alert("Please log in first!");
    }
  };

  const handleSignOutClick = () => {
    history.push("/user"); // Redirect to home after logout
  };

  return (
    <div className="header">
      <h1>Contact</h1>
      {!isLoggedIn ? (
        <Link to="/login">
          <button className="user-icon-btn">
            <i className="fas fa-user"></i>
          </button>
        </Link>
      ) : (
        <button className="sign-out-icon-btn" onClick={handleSignOutClick}>
          <i className="fas fa-sign-out-alt"></i>
        </button>
      )}
    </div>
  );
}

export default ContactHeader;

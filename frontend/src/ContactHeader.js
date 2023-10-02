import React from "react";
import { Link } from "react-router-dom";

function ContactHeader() {
  return (
    <div className="header">
      <h1>Contact</h1>
      <Link to="/login">
        <button className="user-icon-btn">
          <i className="fas fa-user"></i>
        </button>
      </Link>
    </div>
  );
}

export default ContactHeader;

import React from "react";
import ContactHeader from "./ContactHeader";

function Layout({ children }) {
  return (
    <div className="app-container">
      <ContactHeader />
      {children}
    </div>
  );
}

export default Layout;

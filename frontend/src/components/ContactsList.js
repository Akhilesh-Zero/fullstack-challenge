import React from "react";

const ContactsList = ({ contacts }) => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Contacts</h2>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            style={{ padding: "10px", borderBottom: "1px solid #eee" }}
          >
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;

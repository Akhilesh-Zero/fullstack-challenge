import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [expandedContactId, setExpandedContactId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/contacts")
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h3 className="text-center mb-4">Contacts List</h3>
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="card mb-3"
          style={{
            cursor: "pointer",
            borderRadius: "5px",
            border: "1px solid #aaa",
          }}
          onClick={() =>
            setExpandedContactId(
              contact.id === expandedContactId ? null : contact.id
            )
          }
        >
          <div className="card-body">
            <h5 className="card-title">{contact.name}</h5>
            {contact.id === expandedContactId && (
              <div>
                <p>
                  <strong>Username:</strong> {contact.username}
                </p>
                <p>
                  <strong>Email:</strong> {contact.email}
                </p>
                <p>
                  <strong>Phone:</strong> {contact.phone}
                </p>
                <p>
                  <strong>Address:</strong> {contact.address.street},{" "}
                  {contact.address.suite}, {contact.address.city}
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a href={contact.website}>{contact.website}</a>
                </p>
                <p>
                  <strong>Company:</strong> {contact.company.name}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;

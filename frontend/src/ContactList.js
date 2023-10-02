import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ContactList({ setIsAddingContact }) {
  const [selectedContact, setSelectedContact] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchContacts = async (id) => {
    let endpoint = "http://localhost:5000/contacts";
    if (id) endpoint += `/${id}`;

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setContacts(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setContacts([]);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="contact-list-wrapper">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search by ID or Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control"
        />
        <button className="btn btn-outline-info">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="contact-list-container">
        {contacts.map((contact) => (
          <div key={contact.id} className="mb-3">
            <div
              className="contact-name"
              onClick={() =>
                setSelectedContact(
                  contact.id === selectedContact ? null : contact.id
                )
              }
            >
              {contact.name}
              <span
                className={`arrow ${
                  contact.id === selectedContact ? "arrow-up" : "arrow-down"
                }`}
              ></span>
            </div>
            {contact.id === selectedContact && (
              <div className="mt-2">
                <p>
                  <strong>Email:</strong> {contact.email}
                </p>
                <p>
                  <strong>Phone:</strong> {contact.phone}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Link to="/add">
        <button className="add-contact-btn">Add Contact</button>
      </Link>
    </div>
  );
}

export default ContactList;

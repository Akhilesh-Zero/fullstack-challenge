import React, { useEffect, useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts from the backend
    fetch("http://localhost:5000/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;

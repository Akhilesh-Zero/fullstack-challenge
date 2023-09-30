import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactsList from "./components/ContactsList";
import SearchBar from "./components/SearchBar"; // Optional for now
import ContactForm from "./components/ContactForm";
import { fetchContacts } from "./services/api";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Optional for now

  useEffect(() => {
    fetchContacts()
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  }, []);

  // Optional for now, filter contacts based on searchTerm
  const displayedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleContactAdded = () => {
    // Refresh the contacts list once a new contact is added.
    fetchContacts()
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  };

  return (
    <div
      style={{
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        padding: "20px 0",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Contacts Manager
      </h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ContactForm onContactAdded={handleContactAdded} />
      <ContactsList contacts={displayedContacts} />
    </div>
  );
}

export default App;

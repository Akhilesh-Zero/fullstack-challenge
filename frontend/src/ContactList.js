import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

function ContactList({ setIsAddingContact }) {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoggedIn } = useContext(UserContext);

  // const { user } = useContext(UserContext);
  // console.log(user);
  const fetchContacts = async () => {
    const endpoint = "http://localhost:5000/contacts";

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setContacts(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setContacts([]);
    }
  };

  const displayedContacts = searchTerm.trim()
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : contacts;

  const handleSearch = () => {
    // For now, just call a re-render to filter displayedContacts
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  console.log(contacts);
  return (
    <div className="contact-list-wrapper">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search by Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control"
        />
        <button className="btn btn-outline-info" onClick={handleSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="contact-list-container">
        {displayedContacts.map((contact, index) => (
          <div key={contact.id + "-" + index} className="mb-3">
            <div
              className="contact-name"
              onClick={() =>
                setSelectedContactId(
                  contact.id !== selectedContactId ? contact.id : null
                )
              }
            >
              <span>{contact.name}</span>
              <div style={{ display: "flex", alignItems: "center" }}>
                {contact.source === "external" && (
                  <span className="label-external">(ext)</span>
                )}
                {contact.source === "internal" && (
                  <span className="label-internal">(int)</span>
                )}
                <span
                  className={`arrow ${
                    contact.id === selectedContactId ? "arrow-up" : "arrow-down"
                  }`}
                ></span>
              </div>
            </div>

            {contact.id === selectedContactId && (
              <div className="mt-2">
                <p>
                  <strong>Email:</strong> {contact.email}
                </p>
                <p>
                  <strong>Phone:</strong> {contact.phone}
                </p>
                <p>
                  <strong>Website:</strong> {contact.website}
                </p>
                <p>
                  <strong>Company:</strong>{" "}
                  {contact.companyName ||
                  (contact.company && contact.company.name)
                    ? contact.companyName || contact.company.name
                    : "N/A"}
                </p>
                {isLoggedIn ? (
                  // Check if contact is from internal source
                  contact.source === "internal" ? (
                    <Link to={`/edit/${contact.id}`}>
                      <button>Edit</button>
                    </Link>
                  ) : (
                    <button
                      onClick={() =>
                        alert(
                          "This is an External Contact. Please contact External Admin to edit."
                        )
                      }
                    >
                      Edit
                    </button>
                  )
                ) : (
                  <button onClick={() => alert("Please login to edit.")}>
                    Edit
                  </button>
                )}
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

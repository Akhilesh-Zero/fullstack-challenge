import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function EditContact() {
  const { id } = useParams();
  const [contact, setContact] = useState({});
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`http://localhost:5000/contacts/${id}`);
        const data = await response.json();
        setContact(data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching contact:", error);
        setIsLoading(false);
      }
    };

    fetchContact();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading message while fetching
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/contacts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        alert("Contact updated successfully!");
        history.push("/");
      } else {
        alert("Error updating contact.");
      }
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <div className="back-section">
        <button onClick={() => history.push("/")} className="back-icon-btn">
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2 className="mb-5 text-center">Edit Contact</h2>
      </div>

      <div className="middle-section">
        <form onSubmit={handleSubmit}>
          {/* {error && <div className="alert alert-danger">{error}</div>} */}
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={contact.name || ""}
              onChange={handleInputChange}
              placeholder="Name"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              value={contact.username || ""}
              onChange={handleInputChange}
              placeholder="Username"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={contact.email || ""}
              onChange={handleInputChange}
              placeholder="Email"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="phone"
              value={contact.phone || ""}
              onChange={handleInputChange}
              placeholder="Phone"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="website"
              value={contact.website || ""}
              onChange={handleInputChange}
              placeholder="Website"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="company name"
              value={contact.companyName || ""}
              onChange={handleInputChange}
              placeholder="company name"
              className="form-control"
              required
            />
          </div>
          {/* ... Add other fields similarly ... */}
          <div className="button-section text-center">
            <button type="submit" className="btn btn-success mr-2">
              Save
            </button>
            <button
              type="button"
              onClick={() => history.push("/")}
              className="btn btn-danger"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditContact;

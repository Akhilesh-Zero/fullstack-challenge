import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddContact() {
  const history = useHistory();

  const [newContact, setContact] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newlyAddedContact, setNewlyAddedContact] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const nameParts = name.split(".");

    if (nameParts.length === 2) {
      setContact((prevState) => ({
        ...prevState,
        [nameParts[0]]: {
          ...prevState[nameParts[0]],
          [nameParts[1]]: value,
        },
      }));
    } else if (nameParts.length === 3) {
      setContact((prevState) => ({
        ...prevState,
        [nameParts[0]]: {
          ...prevState[nameParts[0]],
          [nameParts[1]]: {
            ...prevState[nameParts[0]][nameParts[1]],
            [nameParts[2]]: value,
          },
        },
      }));
    } else {
      setContact((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!localStorage.getItem("username")) {
      alert("Log in to add contact!");
      return;
    }
    setIsLoading(true);

    const formattedContact = {
      ...newContact,
      address: {
        ...newContact.address,
        geo: {
          lat: parseFloat(newContact.address.geo.lat),
          lng: parseFloat(newContact.address.geo.lng),
        },
      },
    };

    try {
      const response = await fetch("http://localhost:5000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedContact),
      });

      if (response.status === 201) {
        const data = await response.json();
        setNewlyAddedContact(data);
      } else {
        const data = await response.json();
        setError(data.message || "Error adding contact.");
      }
    } catch (err) {
      setError("Failed to add contact. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (newlyAddedContact) {
    return (
      <div>
        <div className="alert alert-success">Contact added successfully!</div>
        <pre>{JSON.stringify(newlyAddedContact, null, 2)}</pre>
        <button onClick={() => history.push("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="contact-form-wrapper">
      <div className="back-section">
        <button onClick={() => history.push("/")} className="back-icon-btn">
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2 className="mb-5 text-center">Add New Contact</h2>
      </div>

      <div className="middle-section">
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newContact.name}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={newContact.username}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newContact.email}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={newContact.phone}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="url"
              name="website"
              placeholder="Website"
              value={newContact.website}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <h4>Address</h4>
          <div className="mb-3">
            <input
              type="text"
              name="address.street"
              placeholder="Street"
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          {/* ... Add the rest of the address fields similarly ... */}
          <div className="mb-3">
            <input
              type="text"
              name="address.geo.lat"
              placeholder="Latitude"
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address.geo.lng"
              placeholder="Longitude"
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <h4>Company</h4>
          <div className="mb-3">
            <input
              type="text"
              name="company.name"
              placeholder="Company Name"
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddContact;

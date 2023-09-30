import React, { useState } from "react";
import axios from "axios";

const ContactForm = ({ onContactAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    phone: "",
    website: "",
    companyName: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation: ensuring all fields are filled before submitting
    const requiredFields = [
      "name",
      "username",
      "email",
      "street",
      "city",
      "phone",
      "website",
      "companyName",
    ];
    for (let field of requiredFields) {
      if (!formData[field]) {
        setError(`Please fill in the ${field} field.`);
        return;
      }
    }

    const contactData = {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      address: {
        street: formData.street,
        suite: formData.suite || "N/A",
        city: formData.city,
      },
      phone: formData.phone,
      website: formData.website,
      company: {
        name: formData.companyName,
      },
    };

    axios
      .post("http://localhost:5000/contacts", contactData)
      .then((response) => {
        onContactAdded(response.data);
        setFormData({
          name: "",
          username: "",
          email: "",
          street: "",
          suite: "",
          city: "",
          phone: "",
          website: "",
          companyName: "",
        });
        setError(null);
      })
      .catch((error) => {
        setError("There was an error adding the contact.");
      });
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <div className="border p-3 rounded">
        <h3 className="text-center mb-4">Add New Contact</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group mb-3">
            <label>Username</label>
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="form-group mb-3">
            <label>Street</label>
            <input
              className="form-control"
              type="text"
              placeholder="Street"
              value={formData.street}
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
            />
          </div>
          <div className="form-group mb-3">
            <label>Suite</label>
            <input
              className="form-control"
              type="text"
              placeholder="Suite"
              value={formData.suite}
              onChange={(e) =>
                setFormData({ ...formData, suite: e.target.value })
              }
            />
          </div>
          <div className="form-group mb-3">
            <label>City</label>
            <input
              className="form-control"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </div>
          <div className="form-group mb-3">
            <label>Phone</label>
            <input
              className="form-control"
              type="text"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="form-group mb-3">
            <label>Website</label>
            <input
              className="form-control"
              type="text"
              placeholder="Website"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
            />
          </div>
          <div className="form-group mb-3">
            <label>Company Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
          </div>
          <button className="btn btn-primary w-100 mt-3" type="submit">
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

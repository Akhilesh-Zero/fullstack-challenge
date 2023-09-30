import React, { useState } from "react";
import axios from "axios";

const ContactForm = ({ onContactAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // Add other fields as needed: phone, website, etc.
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/contacts",
        formData
      );
      if (response.status === 200) {
        alert("Contact added successfully!");
        onContactAdded(); // Notify the parent component to refresh the contacts list
      }
      setFormData({ name: "", email: "" }); // Reset the form fields
    } catch (error) {
      console.error("Error details:", error.response);
      console.error("Error details:", error.response);
      alert("Error adding contact.");
    }
  };

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
      <h3 style={{ textAlign: "center" }}>Add New Contact</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Name</label>
          <input
            type="text"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #aaa",
            }}
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "7px" }}>Email</label>
          <input
            type="email"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #aaa",
            }}
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <br></br>
        <button
          type="submit"
          style={{
            padding: "8px 15px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

import React, { useState } from "react";

function AddContact() {
  const [newContact, setNewContact] = useState({
    name: "",
    username: "",
    email: "",
    // Add other fields as needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = () => {
    // Send a POST request to your backend to create a new contact
    fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New contact created:", data);
        // Reset the form or perform any other actions
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newContact.name}
          onChange={handleInputChange}
        />
        {/* Add input fields for other contact properties */}
        <button type="submit">Create Contact</button>
      </form>
    </div>
  );
}

export default AddContact;

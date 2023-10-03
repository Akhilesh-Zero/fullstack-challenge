const axios = require("axios");
const Contact = require("../models/Contact");

exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    // Update the contact with new data
    const updatedContact = await contact.update(req.body);

    res.json(updatedContact);
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.json(contact);
  } catch (error) {
    console.error("Error fetching contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createContact = async (req, res) => {
  const {
    name,
    username,
    email,
    address: { street, suite, city },
    phone,
    website,
    company: { name: companyName },
  } = req.body;

  const newContact = {
    name,
    username,
    email,
    street,
    suite,
    city,
    phone,
    website,
    companyName,
  };

  try {
    // Save contact to your local database
    await Contact.create(newContact);

    // Post to the external API
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      req.body
    );

    // Respond with the created contact's data
    if (response.status === 201) {
      res.status(201).json(response.data);
    } else {
      res.status(response.status).send("Error: " + response.statusText);
    }
  } catch (error) {
    // Handle errors that occur during the POST request
    res.status(500).send("Error: " + error.message);
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    // Fetch contacts from the external API
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    // const externalContacts = response.data.map((contact) => ({
    //   ...contact,
    //   source: "external",
    // }));

    const externalContacts = response.data.map((contact) => ({
      id: contact.id,
      name: contact.name,
      username: contact.username,
      email: contact.email,
      street: contact.address.street,
      suite: contact.address.suite,
      city: contact.address.city,
      phone: contact.phone,
      website: contact.website,
      companyName: contact.company.name,
      source: "external",
    }));

    // Fetch contacts from your own database

    //     const localContacts = await Contact.findAll();
    // const formattedLocalContacts = localContacts.map((contact) => ({
    //   ...contact.get({ plain: true }),
    //   source: "internal",
    // }));

    const localContacts = await Contact.findAll();
    const formattedLocalContacts = localContacts.map((contact) => ({
      ...contact.get({ plain: true }),
      source: "internal",
    }));

    // Combine the contacts from both sources
    const allContacts = [...externalContacts, ...formattedLocalContacts];

    res.status(200).json(allContacts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const axios = require("axios");

exports.createContact = (req, res) => {
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
    address: { street, suite, city },
    phone,
    website,
    company: { name: companyName },
  };

  const apiEndpoint = "https://jsonplaceholder.typicode.com/users";

  axios
    .post(apiEndpoint, newContact)
    .then((response) => {
      // Check if the POST request was successful
      if (response.status === 201) {
        // Respond with the created contact's data
        res.status(201).json(response.data);
      } else {
        // Handle other response statuses if needed
        res.status(response.status).send("Error: " + response.statusText);
      }
    })
    .catch((error) => {
      // Handle errors that occur during the POST request
      res.status(500).send("Error: " + error.message);
    });
};

exports.getAllContacts = async (req, res) => {
  try {
    // Make a GET request to the API endpoint
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    // Extract the contacts from the response
    const contacts = response.data;

    res.status(200).json(contacts); // Send the contacts as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

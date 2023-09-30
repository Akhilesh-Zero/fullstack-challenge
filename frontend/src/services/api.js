import axios from "axios";

const baseUrl = "http://localhost:5000/contacts";

export const fetchContacts = () => {
  return axios.get(baseUrl);
};

// Add more API functions as needed (addContact, deleteContact, etc.)

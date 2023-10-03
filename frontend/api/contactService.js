import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getAllContacts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contacts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

export const createContact = async (contact) => {
  try {
    const response = await axios.post(`${BASE_URL}/contacts`, contact);
    return response.data;
  } catch (error) {
    console.error("Error creating contact:", error);
    throw error;
  }
};

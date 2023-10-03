export const fetchContacts = async () => {
  return await fetch("http://localhost:5000/contacts");
};

const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router
  .route("/")
  .get(contactController.getAllContacts)
  .post(contactController.createContact);

router
  .route("/:id")
  .get(contactController.getContactById)
  .put(contactController.updateContact);

module.exports = router;

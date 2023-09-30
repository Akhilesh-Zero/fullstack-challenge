const router = require("express").Router();
const contactController = require("../controllers/contactController");

router.route("/").get(contactController.getAllContacts);

// Add more routes as needed

module.exports = router;

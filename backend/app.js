const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./models/database");
const User = require("./models/User"); // Assuming you have a User model in a models folder

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

app.use("/contacts", contactRoutes);

app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .send({ error: err.message || "Something broke!" });
});

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// sequelize.sync({ force: true }).then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

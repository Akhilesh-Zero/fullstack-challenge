const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  console.log("register endpoint hit");

  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ username, password: hashedPassword });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send("Error registering user: " + error.message);
  }
};

exports.login = async (req, res) => {
  console.log("Login endpoint hit");
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).send("Incorrect password");
    }

    // In a real-world scenario, you'd issue a token (like JWT) here
    res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).send("Error logging in: " + error.message);
  }
};

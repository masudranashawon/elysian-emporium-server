const User = require("../models/user.model");

// Signup
const createUser = async (req, res) => {
  try {
    const { name, email, password, image, address, occupation } = req.body;

    const user = await User.signup(
      name,
      email,
      password,
      image,
      address,
      occupation
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const loginUser = async (req, res) => {};

module.exports = {
  createUser,
  loginUser,
};

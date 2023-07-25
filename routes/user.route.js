const express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
} = require("../controllers/user.controller");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const { isAdmin } = require("../middlewares/admin.middleware");

const router = express.Router();

// Register
router.post("/auth/register", createUser);

// Login
router.post("/auth/login", loginUser);

// Get all users
router.get("/", isAuthenticated, isAdmin, getAllUsers);

module.exports = router;

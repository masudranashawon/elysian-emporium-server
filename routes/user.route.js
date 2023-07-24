const express = require("express");
const { createUser, loginUser } = require("../controllers/user.controller");

const router = express.Router();

// Register
router.post("/auth/register", createUser);

// Login
router.post("/auth/login", loginUser);

module.exports = router;

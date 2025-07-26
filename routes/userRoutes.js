const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { getUserProfile, updateUserProfile } = require("../controllers/userController");

// GET current user profile
router.get("/me", protect, getUserProfile);

// UPDATE current user profile
router.put("/me", protect, updateUserProfile);

module.exports = router;

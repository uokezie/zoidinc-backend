 
// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { signup, login, updateUserProfile } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);
router.put("/update-profile", protect, updateUserProfile);


module.exports = router;

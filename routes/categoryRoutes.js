// routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const { getCategoriesWithSubcategories } = require("../controllers/categoryController");

// Make sure this is the same name you exported
router.get("/categories", getCategoriesWithSubcategories);

module.exports = router;

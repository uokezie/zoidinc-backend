// routes/wishlistRoutes.js
const express = require("express");
const router = express.Router();
const {
  saveWishlistToDB,
  getWishlistFromDB,
  saveLikedListToDB,
  getLikedListFromDB
} = require("../controllers/wishlistController");

const protect = require("../middleware/authMiddleware"); // 👈 correct import

router.post("/wishlist/save", protect, saveWishlistToDB);
router.post("/liked/save", protect, saveLikedListToDB);
router.get("/wishlist", protect, getWishlistFromDB);
router.get("/liked", protect, getLikedListFromDB);

module.exports = router;

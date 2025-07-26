// controllers/wishlistController.js
const Wishlist = require("../models/Wishlist");
const LikedList = require("../models/LikedList");

// Save wishlist (cart-like items) to DB
const saveWishlistToDB = async (req, res) => {
  try {
    const userId = req.user.id; // Set by auth middleware
    const { wishlistItems } = req.body;

    // Transform the incoming items
    const newItems = wishlistItems.map(item => ({
      product: item.product?._id || item._id,
      quantity: item.quantity || 1
    }));

    // Use upsert to update existing wishlist or create if not exists
    const wishlist = await Wishlist.findOneAndUpdate(
      { user: userId },
      { items: newItems },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: "Wishlist saved successfully.", wishlist });
  } catch (err) {
    console.error("Error saving wishlist:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};


// Save liked list to DB
const saveLikedListToDB = async (req, res) => {
  try {
    const userId = req.user.id;
    const { likedItems } = req.body;

    // Extract only product IDs
    const likedProductIds = likedItems.map(item => item.product?._id || item._id);

    // Update or create the liked list for this user
    const likedList = await LikedList.findOneAndUpdate(
      { user: userId },
      { likedProducts: likedProductIds },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: "Liked list saved successfully.", likedList });
  } catch (err) {
    console.error("Error saving liked list:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};
// Get wishlist items for a user
const getWishlistFromDB = async (req, res) => {
  try {
    const userId = req.user.id;

    const wishlist = await Wishlist.find({ user: userId }).populate('product');

    res.status(200).json(wishlist);
  } catch (err) {
    console.error("Error fetching wishlist:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Get liked items for a user
const getLikedListFromDB = async (req, res) => {
  try {
    const userId = req.user.id;

    const likedList = await LikedList.find({ user: userId }).populate('product');

    res.status(200).json(likedList);
  } catch (err) {
    console.error("Error fetching liked list:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};


module.exports = {
  saveWishlistToDB,
  getWishlistFromDB,
  saveLikedListToDB,
  getLikedListFromDB,
};


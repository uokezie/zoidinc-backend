const mongoose = require("mongoose");

const likedListSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    likedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("LikedList", likedListSchema);

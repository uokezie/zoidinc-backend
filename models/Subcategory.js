const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema(
  {
     _id: { type: String },
    name: { type: String, required: true },
    category: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Category", 
      required: true 
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subcategory", subcategorySchema);

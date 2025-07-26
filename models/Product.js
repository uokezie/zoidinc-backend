const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    brand: String,
    category: { 
  type: String, // instead of mongoose.Schema.Types.ObjectId
      ref: "Category", 
      required: true 
    },
    subcategory: { 
  type: String, // instead of mongoose.Schema.Types.ObjectId
      ref: "Subcategory", 
      required: true 
    },
    images: [String],
    stock_quantity: { type: Number, default: 0 },
    colors_available: [String],
    sizes_available: [String],
    shipping_info: String,
    features: String,
    specifications: String,
    additional_info: String,
    availability: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

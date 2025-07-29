const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, // assuming you have a Product model
  quantity: { type: Number, required: true },
  amount: { type: Number, required: true }, // amount for that item (quantity * price)
});

const orderSchema = new Schema({
  products: [productSchema],
  totalAmount: { type: Number, required: true }, // total for the entire order
  createdAt: { type: Date, default: Date.now }
});

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },

    // Extended profile
    displayName: { type: String },
    username: { type: String },
    fullName: { type: String },
    phone: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String, default: "Nigeria" },
    firstName: { type: String },
    lastName: { type: String },
    company: { type: String },
    shippingAddress: { type: String },
    billingAddress: { type: String },
    city: { type: String },

    // Orders
    orders: [orderSchema]
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: false },
  }
);

module.exports = mongoose.model("User", userSchema);

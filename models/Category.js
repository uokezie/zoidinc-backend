const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
  _id: { type: String },  // <-- String not ObjectId
    name: { type: String, required: true, unique: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);

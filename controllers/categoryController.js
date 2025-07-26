// controllers/categoryController.js
const Category = require("../models/Category");
const Subcategory = require("../models/Subcategory");

const getCategoriesWithSubcategories = async (req, res) => {
  try {
    const categories = await Category.find();

    const categoriesWithSub = await Promise.all(
  categories.map(async (cat) => {
    const subs = await Subcategory.find({ categoryId: cat._id });
    return {
      _id: cat._id,
      name: cat.name,
      subcategories: subs.map(s => ({ _id: s._id, name: s.name }))
    };
  })
);


    res.status(200).json(categoriesWithSub);
  } catch (err) {
    console.error("❌ Error fetching categories:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCategoriesWithSubcategories };

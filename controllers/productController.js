// controllers/productController.js
const Product = require("../models/Product");
const Subcategory = require("../models/Subcategory");
const Category = require("../models/Category");

const getAllProducts = async (req, res) => {
  try {
    // Fetch all products
    const products = await Product.find();

    // Map and fetch subcategory + category for each product
    const formattedProducts = await Promise.all(
      products.map(async (product) => {
        let subcategory = null;
        let category = null;

        // Find the subcategory
        if (product.subcategoryId) {
          subcategory = await Subcategory.findOne({ _id: product.subcategoryId });
          // Find the category from subcategory
          if (subcategory?.categoryId) {
            category = await Category.findOne({ _id: subcategory.categoryId });
          }
        }

        return {
          id: product._id,
          name: product.name,
          description: product.description,
          price: product.price,
          rating: product.rating,
          brand: product.brand,
          images: product.images,
          stock_quantity: product.stock_quantity,
          colors_available: product.colors_available,
          sizes_available: product.sizes_available,
          shipping_info: product.shipping_info,
          features: product.features,
          specifications: product.specifications,
          additional_info: product.additional_info,
          availability: product.availability,

          // Added fields
          subcategory: subcategory ? subcategory.name : null,
          category: category ? category.name : null,
        };
      })
    );

    res.status(200).json(formattedProducts);
  } catch (err) {
    console.error("❌ Error fetching products:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};


const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Get subcategory & category by names instead of IDs now
    const subcategory = product.subcategory;
    const category = product.category;

    const formattedProduct = {
      id: product._id,
      name: product.name,
      description: product.description,
      price: product.price,
      rating: product.rating,
      brand: product.brand,
      images: product.images,
      stock_quantity: product.stock_quantity,
      colors_available: product.colors_available,
      sizes_available: product.sizes_available,
      shipping_info: product.shipping_info,
      features: product.features,
      specifications: product.specifications,
      additional_info: product.additional_info,
      availability: product.availability,
      subcategory,
      category,
    };

    res.status(200).json(formattedProduct);
  } catch (err) {
    console.error("❌ Error fetching product by ID:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = { getAllProducts ,getProductById};

const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../controllers/productController');

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById); // ✅ NEW ROUTE

module.exports = router;

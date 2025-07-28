// routes/paymentRoutes.js
const express = require("express");
const router = express.Router();
const { initiatePayment } = require("../controllers/paymentController");

router.post("/pay", initiatePayment);
// router.get("/verify/:reference", verifyPayment); // Optional for extra safety


module.exports = router;

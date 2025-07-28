// controllers/paymentController.js
const axios = require("axios");

const initiatePayment = async (req, res) => {
  const { email, amount, fullName } = req.body;

  try {
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email,
        amount: amount * 100, // Convert to kobo
        metadata: {
          full_name: fullName,
        },
        callback_url: "http://localhost:3000/payment-success", // Update for production
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.json(response.data.data); // Contains authorization_url
  } catch (error) {
    console.error("Payment Init Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to initiate payment" });
  }
};

module.exports = { initiatePayment };

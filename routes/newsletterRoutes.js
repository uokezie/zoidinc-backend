import express from "express";
import Newsletter from "../models/Newsletter.js";

const router = express.Router();

router.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, message: "Email is required" });

  try {
    const exists = await Newsletter.findOne({ email });
    if (exists) return res.status(200).json({ success: true, message: "Already subscribed" });

    await Newsletter.create({ email });
    res.status(201).json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;

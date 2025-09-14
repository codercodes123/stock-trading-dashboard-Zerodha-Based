import express from "express";
import axios from "axios";
import { configDotenv } from "dotenv";
const router = express.Router();

// Example: Alpha Vantage stock quote
router.get("/quote/:symbol", async (req, res) => {
  const { symbol } = req.params;
  const API_KEY = process.env.STOCK_API_KEY;

  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching stock:", error.message);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

export default router;

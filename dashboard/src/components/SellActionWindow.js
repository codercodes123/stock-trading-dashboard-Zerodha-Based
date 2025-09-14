/**
 * ===============================
 * SellActionWindow Component
 * ===============================
 * @description
 * - A popup window that allows the user to place a SELL order
 * - Includes:
 *    1. Quantity input
 *    2. Price input
 *    3. Sell & Cancel buttons
 * - Integrated with backend API (http://localhost:3002/neworder)
 * - Uses GeneralContext to open/close the popup
 */

import React, { useState, useContext } from "react";
import axios from "axios";

// Import Context
import GeneralContext from "./GeneralContext";

// Import CSS (can reuse BuyActionWindow.css or make a new one)
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  /**
   * -------------------------------
   * State Variables
   * -------------------------------
   */
  const [stockQuantity, setStockQuantity] = useState(1); // default quantity = 1
  const [stockPrice, setStockPrice] = useState(0.0);     // default price = 0.0

  /**
   * -------------------------------
   * Context
   * -------------------------------
   */
  const { closeBuyWindow } = useContext(GeneralContext);

  /**
   * -------------------------------
   * Handle Sell Click
   * -------------------------------
   * - Sends POST request to backend API
   * - If successful → close popup
   */
  const handleSellClick = async () => {
    try {
      const response = await axios.post("http://localhost:3002/neworder", {
        name: uid,            // stock name/ID
        qty: stockQuantity,   // user-entered quantity
        price: stockPrice,    // user-entered price
        mode: "SELL",         // mode = SELL
      });

      console.log("✅ Sell Order Response:", response.data);

      // Close popup after success
      closeBuyWindow();
    } catch (err) {
      console.error("❌ Error placing sell order:", err);
    }
  };

  /**
   * -------------------------------
   * Handle Cancel Click
   * -------------------------------
   * - Simply closes the popup
   */
  const handleCancelClick = () => {
    closeBuyWindow();
  };

  /**
   * -------------------------------
   * Render
   * -------------------------------
   */
  return (
    <div className="container" id="sell-window" draggable="true">
      {/* ------- Inputs Section ------- */}
      <div className="regular-order">
        <div className="inputs">
          {/* Quantity Input */}
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          {/* Price Input */}
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      {/* ------- Buttons Section ------- */}
      <div className="buttons">
        {/* Example margin display (static) */}
        <span>Margin required ₹140.65</span>
        <div>
          {/* Sell Button */}
          <button className="btn btn-red" onClick={handleSellClick}>
            Sell
          </button>

          {/* Cancel Button */}
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;

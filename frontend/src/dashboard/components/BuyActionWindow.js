import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const generalContext = useContext(GeneralContext);

const handleBuyClick = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:3002/newOrder",
      {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Order placed successfully!");

    generalContext.closeBuyWindow();

    window.location.reload(); // refresh dashboard automatically
  } catch (err) {
    console.log(err.response?.data);

    alert(
      err.response?.data?.message ||
      "Order Failed"
    );
  }
};
  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div
      className="buy-window-container"
      id="buy-window"
    >
      <div className="regular-order">
        <div className="buy-window-inputs">
          <fieldset>
            <legend>Qty.</legend>

            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              value={stockQuantity}
              onChange={(e) =>
                setStockQuantity(e.target.value)
              }
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              value={stockPrice}
              onChange={(e) =>
                setStockPrice(e.target.value)
              }
            />
          </fieldset>
        </div>
      </div>

      <div className="buy-window-buttons">
        <span>
          Margin required ₹140.65
        </span>

        <div>
          <button
            type="button"
            className="dashboard-btn dashboard-btn-blue"
            onClick={handleBuyClick}
          >
            Buy
          </button>

          <button
            type="button"
            className="dashboard-btn dashboard-btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
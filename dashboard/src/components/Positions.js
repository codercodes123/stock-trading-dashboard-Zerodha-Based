import React, { useState, useEffect } from "react";
import axios from "axios";
import { StackedChart } from "./StackedChart";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch positions from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/allPositions")
      .then((res) => {
        setAllPositions(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Axios error:", err);
        setError("Failed to fetch positions");
        setLoading(false);
      });
  }, []);

  // Prepare data for chart safely
  const labels = allPositions?.map((stock) => stock.name) || [];
  const chartData = {
    labels,
    datasets: [
      {
        label: "Price",
        data: allPositions?.map((stock) => stock.price) || [],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  if (loading) return <p>Loading positions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg?.toFixed(2)}</td>
                  <td>{stock.price?.toFixed(2)}</td>
                  <td className={profClass}>{currValue.toFixed(2)}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pass chartData instead of raw array */}
      <StackedChart data={chartData} />
    </>
  );
};

export default Positions;

import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="brokerimage" />
        </div>
        <div className="col-6 p-5">
          <h1 className="">Free and open market education</h1>
          <p className="mb-5">
            {" "}
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and Options </p>
                </li>
                <li>
                  <p>Commodities and Derivatives </p>
                </li>
                <li>
                  <p>Surrency Derivatives </p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and Ipo </p>
                </li>
                <li>
                  <p>Direct Mutual Fund </p>
                </li>
                <li>
                  <p>Bonds and Gov.Securities </p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            alt="PressLogo"
            style={{ width: "90%" }}
            className="mt-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;

import React from "react";

function Pricing() {
  return (
    <div className="container  p-2" style={{ alignItems: "center" }}>
      <div className="row">
        <div className="col-5 p-5 ">
          <h2 className="mb-3 fs-2">Unbeatable pricing</h2>
          <p className="mt-3">
            We pioneered the concept of discount broking and price<br></br>
            transparency in India. Flat fees and no hidden charges.
          </p>
          <a
            href="https://zerodha.com/products"
            className="mt-5"
            style={{ textDecoration: "none" }}
          >
            See pricing<i class="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6  p-5">
          <div className="row text-center">
            <div className="row text-center align-items-center mby-2 ">
              {/* Free Account Opening */}
              <div className="col border">
                <img
                  src="media/images/pricing-eq.svg"
                  alt="Free account opening"
                  style={{ width: "80%" }}
                  className="mb-4"
                />
                <p style={{ fontSize: "80%" }}>Free account opening</p>
              </div>

              {/* Free Equity Delivery */}
              <div className="col border">
                <img
                  src="media/images/pricing-eq (1).svg"
                  alt="Free equity delivery"
                  style={{ width: "80%" }}
                  className="mb-1"
                />
                <p className="" style={{ fontSize: "80%" }}>
                  Free equity delivery <br></br>direct mutual fund
                </p>
              </div>

              {/* Intraday & F&O */}
              <div className="col border">
                <img
                  src="media/images/other-trades.svg"
                  alt="Intraday and F&O"
                  style={{ width: "80%" }}
                  className="mb-4"
                />
                <p style={{ fontSize: "80%" }}>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

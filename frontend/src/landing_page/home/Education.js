import React from "react";

function Education() {
  return (
    <div className="container p-2" style={{ alignItems: "center" }}>
      <div className="row p-5 ">
        <div className="col-6 p-5">
          <img
            src="media/images/education.svg"
            alt="education"
            style={{ width: "70%" }}
          ></img>
        </div>
        <div className="col-6 p-5 ">
          <h2 className="mb-4 fs-2">Free and open market education</h2>
          <p className="mb-4">
            Varsity, the largest online stock market education book in the world
            <br></br> covering everything from the basics to advanced trading.
          </p>
          <a
            href="https://zerodha.com/products"
            className="mt-4"
            style={{ textDecoration: "none" }}
          >
            Varsity <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in{" "}
            <br></br>India for all your market related queries.
          </p>
          <a
            href="https://zerodha.com/products"
            className="mt-4"
            style={{ textDecoration: "none" }}
          >
            TradingQ&A<i class="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;

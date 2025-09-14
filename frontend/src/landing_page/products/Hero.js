import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center  border-bottom p-5 mb-5">
        <h1 className="fs-3 mb-3 mt-5">Zerodha Products</h1>
        <h3 className="fs-4 mb-3">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <h5 className="fs-6 mb-3">
          Check out our{" "}
          <a
            href="https://zerodha.com/investments"
            style={{ textDecoration: "none" }}
          >
            {" "}
            investment offerings →
          </a>
        </h5>
      </div>
    </div>
  );
}

export default Hero;

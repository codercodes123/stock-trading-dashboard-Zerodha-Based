import React from "react";

function Hero() {
  return (
    <div className="container p-5 ">
      <div className="row">
        <h1 className="fs-3 text-center ">Charges</h1>
        <p className="text-center fs-5 text-muted">
          List of all charges and taxes
        </p>

        <div className="col 6 p-4  mt-5">
          <div className="row">
            <div className="col p-5 text-center mt-5">
              <img
                src="media/images/pricing-eq.svg"
                alt="Free account opening"
                style={{ width: "90%" }}
                className="mb-4"
              ></img>
              <h1 className="fs-3 text-center">Free equity delivery</h1>
              <p className="text-center text-muted">
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>
            <div className="col p-5  text-center mt-5">
              <img
                src="media/images/other-trades.svg"
                alt="Free account opening"
                style={{ width: "90%" }}
                className="mb-4"
              ></img>
              <h1 className="fs-3 text-center">Intraday and F&O trades</h1>
              <p className="text-center text-muted">
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
                Flat ₹20 on all option trades.
              </p>
            </div>
            <div className="col p-5  text-center mt-5">
              <img
                src="media/images/pricing-eq.svg"
                alt="Free account opening"
                style={{ width: "90%" }}
                className="mb-4"
              ></img>
              <h1 className="fs-3 text-center">Free direct MF</h1>
              <p className="text-center text-muted">
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
        <p className="text-center fs-4">
          <a
            className=""
            href="https://zerodha.com/brokerage-calculator#tab-equities"
            style={{ textDecoration: "none" }}
          >
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </p>
        <p className="fs-4 mt-5"> Charges for account opening</p>
        <div className="">
          <table class="table border">
            <thead>
              <tr>
                <th scope="col text-muted" style={{ fontWeight: "bold" }}>
                  Type of account
                </th>
                <th scope="col"></th>
                <th scope="col">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td></td>
                <td>
  <span className="badge bg-success px-3 py-2">FREE</span>
</td>
              </tr>
              <tr>
                <td>Offline account</td>
                <td></td>
                <td>
  <span className="badge bg-success px-3 py-2">FREE</span>
</td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td></td>
                <td><div className="pt-2"
                  style={{
                    textTransform: "uppercase",
                    fontsize: "11px",
                    fontweight: "500",
                    backgroundcolor: "#4caf50",
                    padding: " 4px 10px",
                    borderradius: "2px",
                   
                  }}><b></b>&#x20B9;500</div></td>
              </tr>
              <tr>
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td></td>
                <td><div className="pt-2"
                  style={{
                    textTransform: "uppercase",
                    fontsize: "11px",
                    fontweight: "500",
                    backgroundcolor: "#4caf50",
                    padding: " 4px 10px",
                    borderradius: "2px",
                   
                  }}><b></b>&#x20B9;500</div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className="mt-5"></hr>
         <p className="fs-4 mt-5">Demat AMC (Annual Maintenance Charge)</p>
         <div className="">
          <table class="table border bg-light">
            <thead>
              <tr>
                <th scope="col text-muted" style={{ fontWeight: "bold" }}>               
                Value of holdings
                </th>
                <th scope="col">AMC</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to ₹4 lakh</td>
                <td>
  <span className="badge bg-success px-3 py-2">FREE*</span>
</td>
               
                <td>  </td>
              </tr>
              <tr>
                <td>₹4 lakh - ₹10 lakh</td>
                <td><div className="pt-2"
                  style={{
                    textTransform: "uppercase",
                    fontsize: "11px",
                    fontweight: "500",
                    backgroundcolor: "#4caf50",
                    padding: " 4px 10px",
                    borderradius: "2px",
                   
                  }}><b></b>₹ 100 per year, charged quarterly*</div></td>
                <td></td>
              </tr>
              <tr>
                <td>Above ₹10 lakh</td>
                <td><div className="pt-2"
                  style={{
                    textTransform: "uppercase",
                    fontsize: "11px",
                    fontweight: "500",
                    backgroundcolor: "#4caf50",
                    padding: " 4px 10px",
                    borderradius: "2px",
                   
                  }}><b></b>₹ 300 per year, charged quarterly</div></td>
                <td></td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Hero;

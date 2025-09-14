import React from "react";

function Universe() {
  return (
    <div className="container p-5 ">
      <p className="mb-5 fs-4 text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <h3 className="mb-3 text-center">The Zerodha Universe</h3>
      <p className="text-center">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row text-center ">
        <div className="col p-4  text-muted fs-6 mt-5 ">
          <a
            href="https://www.zerodhafundhouse.com/"
            style={{ textDecoration: "none", marginBottom: "" }}
          >
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ width: "50%", marginBottom: "3%" }}
            ></img>
            <br />
            <p style={{ color: "GrayText", fontSize: "90%" }}>
              our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save your goals
            </p>
          </a>
          <a
            href="https://www.zerodhafundhouse.com/"
            style={{ textDecoration: "none" }}
          >
            <img
              src="media/images/streakLogo.png"
              style={{ width: "40%", marginTop: "10%" }}
            ></img>
            <br />
            <p style={{ color: "GrayText", fontSize: "90%", marginTop: "3%" }}>
              Systematic Trading Platform <br />
              that allows you to create and backtest
              <br /> strategies without coding
            </p>
          </a>
        </div>
        <div className="col p-4  text-muted fs-6 mt-5  ">
          <a href="https://sensibull.com/" style={{ textDecoration: "none" }}>
            <img
              src="media/images/sensibullLogo.svg"
              style={{ width: "60%", marginBottom: "3%" }}
            ></img>
            <br />
            <p style={{ color: "GrayText", fontSize: "90%", marginTop: "3%" }}>
              Option trading Platform that lets you
              <br />
              create strategies,analyze position and examine <br />
              data points like open interest,FII/DII,and more
            </p>
          </a>

          <a
            href="https://smallcase.zerodha.com/"
            style={{ textDecoration: "none" }}
          >
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "60%", marginTop: "10%" }}
            ></img>
            <br />
            <p style={{ color: "GrayText", fontSize: "90%", marginTop: "3%" }}>
              Thematic investing platform <br></br>that helps you invest in
              diversified <br></br>baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div className="col p-4  text-muted fs-6 mt-5 text-center  ">
          <a
            href="https://www.tijorifinance.com/ideas-dashboard/"
            style={{ textDecoration: "none" }}
          >
            <img
              src="media/images/tijori.svg"
              style={{ width: "40%", marginTop: "%", alignContent: "center" }}
            ></img>
            <br />
            <p style={{ color: "GrayText", fontSize: "90%" }}>
              Investment research platform<br></br> that offers detailed
              insights on stocks,<br></br> sectors, supply chains, and more.
            </p>
          </a>
          <a
            href="https://www.tijorifinance.com/ideas-dashboard/"
            style={{ textDecoration: "none" }}
          >
            <img
              src="media/images/dittoLogo.png"
              style={{ width: "40%", marginTop: "5%" }}
            ></img>
            <br />
            <p style={{ color: "GrayText", fontSize: "90%", marginTop: "8%" }}>
              Personalized advice on life <br></br>and health insurance. No spam{" "}
              <br></br>and no mis-selling.
            </p>
          </a>
        </div>
        <div class="mini-container m-5 text-center">
         <button
          className="p-2 btn btn-primary fs-5 mt-3"
          style={{ width: "15%", margin: "0 auto",backgroundColor:"#387ed1" ,alignItems:"center"}}
        >
          Sign up for Free
        </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;

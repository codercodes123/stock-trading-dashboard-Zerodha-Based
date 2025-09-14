import React from "react";

function RightSection({ imageURL, productName, productDescription, tryDemo }) {
  return (
    <div className="container p-5 mt-5" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div className="row p-5">
        <div className="col-5 p-5">
          <h1 className="text-muted fs-3" style={{ fontWeight: "normal" }}>
            {productName}{" "}
          </h1>
          <p className="text-muted" style={{fontSize:"110%"}}>{productDescription} </p>
          <div className="mt-5">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
                Learn more →
            </a>
            
          </div>
        </div>
        <div className="col-7 ">
          <img src={imageURL} style={{ width: "90%", }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;

import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  coin,
}) {
  return (
    <div className="container mb-5">
      <div className="row p-5">
        <div className="col-7 p-5">
          <img src={imageURL} style={{ width: "90%" }} />
        </div>

        <div className="col-5 p-5 mt-5">
          <h1 className="text-muted fs-3" style={{ fontWeight: "normal" }}>
            {productName}{" "}
          </h1>
          <p className="fs-5 text-muted">{productDescription} </p>
          <div className="mt-5">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try demo →
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn more →
            </a>
          </div>
          <div className="mt-3 ">
            <a href={googlePlay} s>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
      <section class="products-section mt-5" id="coin">
        <div class="container">
          
        </div>
      </section>
    </div>
  );
}

export default LeftSection;

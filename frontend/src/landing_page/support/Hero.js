import React from "react";

function Hero() {
  return (
    <div className="container bg-light">
      <div className="row">
        <div className="col-9 mt-5">
          <h1>Support Portal</h1>
        </div>
        <div className="col-3 mt-5" style={{}}>
          <button
            className=" p-2 border "
            style={{
              backgroundColor: "#397dd0",
              textDecoration: "none",
              color: "white",
              borderRadius: "5%",
              width: "50%",
              fontWeight: "bold",
            }}
          >
            <a> My Ticket</a>
          </button>
        </div>
        <div class="input-group input-group-lg mt-3">
          <label for="ip"></label>
          <span class="input-group-text" id="inputGroup-sizing-lg" typeof="ip">
            <i class="fa fa-search" aria-hidden="true" i></i>
          </span>

          <input
            type="text"
            class="form-control "
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            placeholder="Eg: How do I open my account, How do i Activate F&O"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

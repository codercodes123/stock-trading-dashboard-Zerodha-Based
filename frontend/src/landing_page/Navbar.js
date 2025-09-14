import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      
      <nav class="navbar navbar-expand-lg  border-bottom" style={{backgroundColor:'#ffffff'}}>
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "30%" }}
              class="d-inline-block align-text-top"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup" >
                  Signup
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">
                    About
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/product">
                  Products
                </Link>
              </li>

               <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li>
             
              <li class="nav-item ">
                <Link class="nav-link active" aria-current="page" to="/support">
                  Support 
                </Link>
              </li>
            
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

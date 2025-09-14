import React from "react";
import { Link } from "react-router-dom";

function NotFound(){
  return (
    <div className="contianer p-5 mb-5">
      <div className="row text-center">
        <h1 className="fs-2 text-muted mb-4"> 404 <br></br>Kiaan couldn’t find that page </h1>
        <p className="mb-4">
         We couldn’t find the page you were looking for.<Link to="/"> Visit Zerodha’s home page</Link>
        </p>
       
      </div>
    </div>
  );
}

export default NotFound;

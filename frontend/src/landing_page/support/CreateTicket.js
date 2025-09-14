import React from "react";

function CreateTicket() {
  return (
  <div className="container mt-4">
  <div className="row">
    <div className="col-8 " style={{textAlign:"-webkit-match-parent"}}>
      <p className="mb-5">
        <a className="btn  w-100 text-start  fs-4 border" data-bs-toggle="collapse" href="#accountOpening">
         <i class="fa fa-plus-circle " aria-hidden="true"></i>  &nbsp;&nbsp;  Account Opening <i class="fa fa-angle-down" aria-hidden="true" ></i>
        </a>
      </p>
      <div className="collapse" id="accountOpening">
        <ul>
          <li className="mb-4"><a href="#"  style={{textDecoration:"none",lineBreak:"auto"}}>Resident individual</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Minor</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Non Resident Indian (NRI)</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Company, Partnership, HUF and LLP</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Glossary</a></li>
        </ul>
      </div>

      <p  className="mb-5">
        <a className="btn  w-100 text-start border fs-4 " data-bs-toggle="collapse" href="#zerodhaAccount">
           <i class="fa fa-user-circle-o" aria-hidden="true"></i> &nbsp;&nbsp; Your Zerodha Account <i class="fa fa-angle-down" aria-hidden="true" ></i>
        </a>
      </p>
      <div className="collapse " id="zerodhaAccount" >
        <ul>
          <li className="mb-4"><a href="#"  style={{textDecoration:"none"}}>Your Profile</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Account modification</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Client Master Report (CMR) and DP</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Nomination</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Transfer and conversion of securities</a></li>
        </ul>
      </div>
      
      <p  className="mb-5">
        <a className="btn  w-100 text-start border fs-4 " data-bs-toggle="collapse" href="#kite">
          <i class="fa fa-shield" aria-hidden="true"></i> &nbsp;&nbsp;Kite <i class="fa fa-angle-down" aria-hidden="true" ></i>
        </a>
      </p>
      <div className="collapse " id="kite" >
        <ul>
          <li className="mb-4"><a href="#"  style={{textDecoration:"none"}}>IPO</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Trading FAQs</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Margin Trading Facility (MTF) and Margins</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Charts and orders</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Alerts and Nudges</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>General</a></li>
        </ul>
      </div>
      <p  className="mb-5">
        
        <a className="btn  w-100 text-start border fs-4 " data-bs-toggle="collapse" href="#funds">
           <i class="fa fa-inr " aria-hidden="true" ></i> &nbsp;&nbsp;Funds <i class="fa fa-angle-down" aria-hidden="true" ></i>
        </a>
      </p>
      <div className="collapse " id="funds" >
        <ul>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Add money</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Withdraw money</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Add bank accounts</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>eMandates</a></li>
          
        </ul>
      </div>
       <p  className="mb-5">
        
        <a className="btn  w-100 text-start border fs-4 " data-bs-toggle="collapse" href="#console">
           <i class="fa fa-terminal" aria-hidden="true"></i>&nbsp;&nbsp; Console<i class="fa fa-angle-down" aria-hidden="true" ></i>
        </a>
      </p>
      <div className="collapse " id="console" >
        <ul>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Portfolio</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Corporate actions</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Funds statement</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Reports</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Profile</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Segments</a></li>
        </ul>
      </div>
       <p  className="mb-5">
        
        <a className="btn  w-100 text-start border fs-4 " data-bs-toggle="collapse" href="#coin">
           <i class="fa fa-inr " aria-hidden="true" ></i> &nbsp;&nbsp;Coins<i class="fa fa-angle-down" aria-hidden="true" ></i>
        </a>
      </p>
      <div className="collapse " id="coin" >
        <ul>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Mutual funds  </a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>National Pension Scheme (NPS)</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Fixed Deposit (FD)</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Features on Coin</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>Payments and Orders</a></li>
          <li className="mb-4"><a href="#"style={{textDecoration:"none"}}>General</a></li>
        </ul>
      </div>
    </div>

    

    <div className="col-4">
      <ul>
      <div className="p-2 border-start border-warning border-4 bg-light mb-5">
      
        <a href="#" className="mt-5">Exclusion of F&O contracts on 8 securities from Aug 29, 2025</a><br />
        <a href="#" className="mt-5">Revision in expiry day of Index and Stock derivatives contracts</a>
      
      </div>
      </ul>

      <div class="flex flex-col  w-full p-2 border-start  bg-light mb-5">
		<div class="bg-z-light-gray font-medium border">Quick links</div>
		<a href="https://zrd.sh/signup" class=" hover:text-z-black text-z-blue border">
		  1. Track account opening
		</a>
    <br></br>
		<a href="https://zrd.sh/segment-activation" class=" hover:text-z-black text-z-blue border border-z-border-dark border-t-0 cursor-pointer">
		  2. Track segment activation
		</a>
    <br></br>

		<a href="https://zrd.sh/latest-leverage" class=" hover:text-z-black text-z-blue border border-z-border-dark border-t-0 cursor-pointer">
		  3. Intraday margins
		</a>
    <br></br>
		<a href="https://zrd.sh/kite-manual" class=" hover:text-z-black text-z-blue border border-z-border-dark border-t-0 cursor-pointer">
		  4. Kite user manual
		</a>
	  </div>
    </div>
  </div>
</div>



  );
}

export default CreateTicket;

import React ,{useState,useEffect} from "react";
import axios  from "axios"; 
import { VerticalGraph } from "./VerticalGraph";  
// axios: A popular JavaScript library used for making HTTP requests to fetch data from APIs. 
// (currently not used in this file)

// import { VerticalGraph } from "./VerticalGraph"; 
// This would be a custom React component to display stock data visually as a vertical graph (currently commented out)

//import { holdings } from "../data/data";  
// holdings: An array of stock objects imported from a local file.
// Each stock object contains information about a particular investment.
// Example:
// {
//   name: "TCS",       // Instrument (stock name / company name)
//   qty: 10,           // Quantity of shares owned
//   avg: 3200.5,       // Average cost per share (purchase price)
//   price: 3450.7,     // LTP = Last Traded Price (latest market price per share)
//   net: "+2.50%",     // Net % change = overall performance percentage
//   day: "-0.45%",     // Day change = percentage change during today’s trading
//   isLoss: false      // Boolean flag indicating whether today’s change is a loss
// }

// React functional component
// Functional components are JavaScript functions that return JSX (HTML-like syntax in React).
// JSX makes it easy to describe UI in JavaScript.



const Holdings = () => {

  const [allHoldings,setAllHoldings] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/allHoldings").then((res)=>{
      console.log(res.data); 
      setAllHoldings(res.data);
    })
  },[]);

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels = allHoldings.map((stock) => stock.name);

const data = {
  labels,
  datasets: [
    {
      label: 'Stock Price',
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

  return (
    <>
      {/* Title with total count of holdings */}
      <h3 className="title">Holdings({allHoldings.length})</h3>
      {/* holdings.length: number of items in the holdings array */}

      {/* Table to display stock details in a structured format */}
      <div className="order-table">
        <table>
          {/* Table header row (column titles) */}
          <tr>
            <th>Instrument</th>   {/* Stock/Company name */}
            <th>Qty.</th>         {/* Number of shares owned */}
            <th>Avg. cost</th>    {/* Average purchase cost per share */}
            <th>LTP</th>          {/* Last Traded Price = current market price per share */}
            <th>Cur. val</th>     {/* Current Value = qty × LTP */}
            <th>P&L</th>          {/* Profit & Loss = (Cur. val - Investment cost) */}
            <th>Net chg.</th>     {/* Net change = % change in total value */}
            <th>Day chg.</th>     {/* Day change = % change today */}
          </tr>

          {/* Loop through holdings array and render each stock row */}
          {allHoldings.map((stock, index) => {
            // map(): A JavaScript array method used to loop over each element
            // and return a new array of transformed items.
            // In React, it's often used to generate lists of JSX elements.

            // Current market value of this holding
            const currValue = stock.price * stock.qty; 
            // const: Declares a constant variable (cannot be reassigned).
            // Here it's used for calculated values.

            // Calculate Profit/Loss:
            // (Current value - Investment cost).
            // Investment cost = avg purchase price × quantity.
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;

            // Assign CSS class for coloring text:
            // "profit" = green (positive), "loss" = red (negative)
            const profClass = isProfit ? "profit" : "loss";

            // Day change color based on the isLoss flag from stock data
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              // key={index}: A unique identifier required by React 
              // to track which list items have changed or been updated.
              <tr key={index}>
                {/* JSX curly braces { } allow embedding JavaScript expressions inside HTML-like code */}
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                {/* toFixed(2): limits decimal places to 2 for currency formatting */}
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>

                {/* P&L value with dynamic color */}
                <td className={profClass}>
                  {(currValue - stock.avg * stock.qty).toFixed(2)}
                </td>

                {/* Net percentage change (overall trend) */}
                <td className={profClass}>{stock.net}</td>

                {/* Day percentage change (today’s performance) */}
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      {/* Summary section showing totals (static values for now) */}
      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
          {/* Total investment = money initially invested = sum of (avg × qty) for all stocks */}
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
          {/* Current value = sum of (LTP × qty) for all stocks */}
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
          {/* P&L (Profit & Loss) = Current value − Total investment */}
          {/* % shown is percentage profit compared to total investment */}
        </div>
      </div>

      {/* Future placeholder: graphical representation of data */}
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
// export default: A way to export a component so it can be imported in other files.

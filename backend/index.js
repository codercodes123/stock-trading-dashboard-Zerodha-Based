// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import the Express framework
// Express is a minimal web framework for building APIs and web servers in Node.js
const express = require("express");
const { HoldingsModel } = require("./model/Holdingsmodel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel  }=require("./model/OrdersModel");
const bodyParser = require('body-parser');
const cors=require('cors');


// Import Mongoose
// Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js
// It helps define schemas and interact with MongoDB easily
const mongoose = require("mongoose");
const { OrdersSchema } = require("./schemas/OrdersSchema");

// Read PORT from environment variables, fallback to 3002 if not set
// process.env.PORT → loaded from .env file
const PORT = process.env.PORT || 3002;

// Read MongoDB connection string (URI) from environment variables
// Example (in .env): MONGO_URL=mongodb://127.0.0.1:27017/zerodha
const uri = process.env.MONGO_URL;

// Initialize an Express application
const app = express();

// Middleware
app.use(cors()); // ✅ Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // ✅ Parse JSON request bodies 

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];
//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     newHolding.save();
//   });
//   res.send("done");
// });

// Start the server and listen on the defined PORT
// app.listen(PORT, callback) starts the server and runs the callback once it is ready

// app.get("/addpositions", async (res, req) => {
//   let temppositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   temppositions.forEach((item) => {
//     let newPositions = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPositions.save();
//   });
//   res.setEncoding
// });

// ================================
// ROUTES FOR FETCHING HOLDINGS & POSITIONS
// ================================

// Route 1: GET /allHoldings
app.get('/allHoldings', async (req, res) => {
  /**
   * Responsibility:
   * - Fetch all "Holdings" documents from MongoDB.
   * - Send the fetched data back to the client as a JSON response.
   * 
   * Technical Terms:
   * - `app.get(...)`: Express.js method to define a route for HTTP GET requests.
   * - `async (req, res)`: Declares the route handler as asynchronous so we can use `await`.
   * - `req`: Request object, contains details about the HTTP request (headers, params, body, etc.).
   * - `res`: Response object, used to send back data to the client.
   * - `HoldingsModel.find({})`: A Mongoose query that fetches all documents from the "holdings" collection.
   * - `res.json(...)`: Sends a JSON-formatted response to the client.
   */
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});


app.post('/neworder',async(req,res)=>{
  let newOrder=new OrdersModel({
  name: req.body.name,
  qty: req.body.qty,
  price: req.body.price,
  mode:req.body.mode,

 
  });
  newOrder.save();

  res.send("Order Saved!")

});

// Route 2: GET /allPositions
app.get('/allPositions', async (req, res) => {
  /**
   * Responsibility:
   * - Fetch all "Positions" documents from MongoDB.
   * - Send the fetched data back to the client as a JSON response.
   * 
   * Technical Terms:
   * - `PositionsModel`: A Mongoose model for the "positions" collection.
   * - `PositionsModel.find({})`: Retrieves all documents from the "positions" collection.
   * - `res.json(allPositions)`: Returns the result to the client in JSON format.
   */
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.listen(PORT, () => {
  console.log("App started");

  // Connect to MongoDB using mongoose
  // ❌ NOTE: In Mongoose v7+, mongoose.connect() returns a Promise and should be used with .then() or async/await.
  // ✅ In this code, it is written without handling the Promise, which may cause issues.
  mongoose.connect(uri)
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("DB connection error:", err));
  const authRoutes = require("./Routes/auth");
  app.use("/api/auth", authRoutes);


  // This log will execute immediately, not waiting for actual DB connection
  console.log("DB Connected");
});

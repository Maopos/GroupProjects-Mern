// 1. import express
import express from "express";
// 7. import connectDb and dotenv
import connectDb from "./config/db.js";
import dotenv from "dotenv";

// 2.1 Run server
const app = express();

// 8. Connect mongoDb
dotenv.config();
connectDb();

// 2.2 Run server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("");
  console.log("==================================");
  console.log("");
  console.log(`✅ Server run on port: ${PORT}!!!`)
});

// 3. create directory config/db.js

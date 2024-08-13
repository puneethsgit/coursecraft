// const express = require("express");
// const dotenv = require("dotenv");

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import courseRoute from "./routes/course.route.js";
import userRoute from "./routes/user.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const URL = process.env.MongoDBURL;
app.use(cors()); //middleware to handle 2-way routes
app.use(express.json()); //data parse to json

// connect to mongodb
// try {
//   mongoose.connect(URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("connected to mongodb");
// } catch (error) {
//   console.log("Error", error);
// }

async function main() {
  await mongoose.connect(URL);
}

main()
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => console.log("Error", err));

//routes

app.get('/', (req, res) => {
  res.json({success: "Working"})
})

app.use("/course", courseRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

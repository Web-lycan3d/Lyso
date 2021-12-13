/** @format */
require("dotenv").config();
const express = require("express");
const connection = require("./connection/mongo");
const cors = require("cors");
const port = process.env.PORT || 4000;

const app = express();
connection();

app.use(cors());

app.use(express.json());

app.use("/", require("./routes/homeRoute"));
app.use("/user", require("./routes/userRoute"));

app.listen(port, () => {
  console.log("server is running in port " + port);
});

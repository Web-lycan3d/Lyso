/** @format */

const express = require("express");

const router = express.Router();
const fs = require("fs");

router.post("/data", (req, res) => {
  console.log(req.body);
  // fs.readFile(req.files.file.path, (err, data) => {
  //   console.log(data);
  // });
});

module.exports = router;

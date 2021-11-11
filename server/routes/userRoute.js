/** @format */

const express = require("express");

const userFile = require("../models/Files");

// AKIARNRXXVIGCPLJJ2GC
// IUhZOZIOkJqXEK2iMgNP6yzA0liiEg43iN4CtyWL

const router = express.Router();
const fs = require("fs");

router.post("/data", async (req, res) => {
  // fs.readFile(req.files.file.path, (err, data) => {
  //   console.log(data);
  // });

  try {
    const newFile = new userFile(req.body.userData);
    await newFile.save();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

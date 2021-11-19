/** @format */

const express = require("express");

const router = express.Router();
const DataP = require("../models/DataProcessing");
const Terrain = require("../models/Terrainmodel");

router.post("/data", async (req, res) => {
  // fs.readFile(req.files.file.path, (err, data) => {
  //   console.log(data);
  // });

  try {
    const newFile = new Terrain(req.body.userData);
    await newFile.save();
  } catch (error) {
    console.log(error);
  }
});
router.post("/data/process", async (req, res) => {
  // fs.readFile(req.files.file.path, (err, data) => {
  //   console.log(data);
  // });

  try {
    const newFile = new DataP(req.body.userData);
    await newFile.save();
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;

/** @format */

const express = require("express");

const router = express.Router();
const DataP = require("../models/DataProcessing");
const Terrain = require("../models/Terrainmodel");
const userContacted = require("../models/ContactModel");
const { nanoid } = require("nanoid");

router.post("/data", async (req, res) => {
  // fs.readFile(req.files.file.path, (err, data) => {
  //   console.log(data);
  // });

  const itemId = nanoid();
  req.body.userData.item_Id = itemId;
  req.body.userData.date = new Date().toLocaleString();

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

  const itemId = nanoid();
  req.body.userData.item_Id = itemId;
  req.body.userData.date = new Date().toLocaleString();

  try {
    const newFile = new DataP(req.body.userData);
    await newFile.save();
  } catch (error) {
    console.log(error);
    // }
  }
});

router.get("/post/data", async (req, res) => {
  // fs.readFile(req.files.file.path, (err, data) => {
  //   console.log(data);
  // });

  try {
    const terrData = await Terrain.find({});
    const dataProcess = await DataP.find({});
    const userContact = await userContacted.find({});

    res.json({ terrData, dataProcess, userContact });
  } catch (error) {
    console.log(error);
  }
});

router.patch("/update/data", async (req, res) => {
  const { itemID, itemStatus } = req.body;

  const checkitem = await Terrain.findOne({ item_Id: itemID });

  if (checkitem) {
    const updateItem = await Terrain.findOneAndUpdate(
      { item_Id: itemID },
      {
        $set: {
          status: itemStatus,
        },
      },
      {
        new: true,
      }
    );
    return res.json(updateItem);
  } else {
    const checkitem2 = await DataP.findOne({ item_Id: itemID });
    if (checkitem2) {
      const updateItem2 = await DataP.findOneAndUpdate(
        { item_Id: itemID },
        {
          $set: {
            status: itemStatus,
          },
        },
        {
          new: true,
        }
      );
      return res.json(updateItem2);
    } else {
      res.json({ message: "Item not found" });
    }
  }
});
router.post("/contactuser", async (req, res) => {
  try {
    const newFile = new userContacted(req.body.contactData);
    await newFile.save();
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;

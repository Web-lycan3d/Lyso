/** @format */

const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    status: {
      type: String,
      default: "Pending",
    },
    date: String,
    address: String,
    Objectdetails: {
      Location: String,
      key: String,
    },
    item_Id: String,
  },
  {
    timestamps: true,
  }
);
const Terrain = mongoose.model("Terrain", FileSchema);

module.exports = Terrain;

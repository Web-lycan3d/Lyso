/** @format */

const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,

    status: {
      type: String,
      default: "Pending",
    },
    projectName: String,
    address: String,
    instruction: String,
    Objectdetails: {
      Location: String,
      key: String,
    },
    date: String,
    device: {},
    item_Id: String,
  },
  {
    timestamps: true,
  }
);
const DataP = mongoose.model("DataP", dataSchema);

module.exports = DataP;

/** @format */

const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  projectName: String,
  address: String,
  instruction: String,
  Objectdetails: {
    Location: String,
    key: String,
  },
}, {
  timestamps: true,
});
const DataP = mongoose.model("DataP", dataSchema);

module.exports = DataP;

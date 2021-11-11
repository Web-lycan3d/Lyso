/** @format */

const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  Objectdetails: {
    Location: String,
    key: String,
  },
});
const userFile = mongoose.model("userFile", FileSchema);

module.exports = userFile;

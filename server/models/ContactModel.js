/** @format */

const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    messages: String,
  },
  {
    timestamps: true,
  }
);

const userContacted = mongoose.model("contactuser", ContactSchema);

module.exports = userContacted;

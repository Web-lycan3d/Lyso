/** @format */

const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
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
    item_Id: String,
  },
  { timestamps: true }
);
const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;

/** @format */

const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://root:${process.env.DB_PASS}@demo.mb7pd.mongodb.net/Lyso`
    );
    console.log("connected to the Database");
  } catch (error) {
    console.log("server error");
  }
};
module.exports = connection;

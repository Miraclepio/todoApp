const mongoose = require("mongoose");
require("dotenv").config();
const db = process.env.DataBase_url;
mongoose
  .connect(db)
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

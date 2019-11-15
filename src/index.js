const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const book_controller = require("./books/route/book_route");

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://root:password123@ds141188.mlab.com:41188/bookservice1122",
  () => {
    console.log("database is connected");
  }
);
const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });
app.use(cors());
app.use(bodyParser.json());
app.use("/books", book_controller);

app.listen("5000", () => {
  console.log("API are running");
});

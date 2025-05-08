const { error } = require("console");
const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  res.send("API Called ");
});
app.get("/html", (req, res) => {
  fs.readFile("home.html", "utf-8", (error, data) => {
    if (error) {
      res.send("faild to read the content of the file.");
    } else {
      res.send(data);
    }
  });
});
app.listen(4526, () => {
  console.log("Server Started");
});

const express = require("express");
const app = express();

app.get("", () => {});
app.listen(3065, () => {
  console.log("Server Started");
});

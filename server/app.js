const express = require("express");
const app = express();

app.post("/user", (req, res) => {}); //http://localhost:3065/user

app.listen(3065, () => {
  console.log("Server Started");
});

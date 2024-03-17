const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Everything good");
});
app.listen(5000, console.log("app started at 5000"));

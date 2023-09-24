const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("Server response");
});

app.post("/", (req, res) => {
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("Server online");
});

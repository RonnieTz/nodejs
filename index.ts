const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json("Server response");
});

app.post("/", (req, res) => {
  res.json("server post response");
});

app.listen(3000, () => {
  console.log("Server online");
});

var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.get("/", function (req, res) {
    res.json("Server response");
});
app.post("/", function (req, res) {
    res.json("server post response");
});
app.listen(3000, function () {
    console.log("Server online");
});

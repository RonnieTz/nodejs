var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", function (req, res) {
    res.json("Server response");
});
app.post("/", function (req, res) {
    res.json("server post response");
});
app.listen(3000, function () {
    console.log("Server online");
});

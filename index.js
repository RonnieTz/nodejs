const app = require("express")();
const http = require("http").createServer(app, { cors: { origin: "*" } });
const io = require("socket.io")(http, { cors: { origin: "*" } });
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.set("io", io);

io.on("connection", (socket) => {
  console.log(socket.id);
});

app.post("/", (req, res) => {
  io.emit("data", req.body);
  res.json(req.body);
});
app.post("/rooms", (req, res) => {
  console.log(req.body);
  io.emit("rooms", req.body);
  res.json(req.body);
});

app.post("/adduser", (req, res) => {
  io.emit("adduser");
  res.json(req.body);
});

http.listen(3001, () => {
  console.log("server online");
});

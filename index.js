const app = require("express")();
const http = require("http").createServer(app, { cors: { origin: "*" } });
const io = require("socket.io")(http, { cors: { origin: "*" } });
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

io.on("connection", (socket) => {
  console.log(socket.id);
});

app.post("/", (req, res) => {
  res.json(req.body);
});

http.listen(3000, () => {
  console.log("server online");
});

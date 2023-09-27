const app = require("express")();
const http = require("http").createServer(app, { cors: { origin: "*" } });
const io = require("socket.io")(http, { cors: { origin: "*" } });
const cors = require("cors");

app.use(cors({ origin: "*" }));

io.on("connection", (socket) => {
  console.log(socket.id);
});

app.post("/", (req, res) => {
  res.json("server response");
});

http.listen(3000, () => {
  console.log("server online");
});

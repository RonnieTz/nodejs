const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.emit("connect", { message: `Client ${socket.id} connected.` });
});

app.get("/", (req, res) => {
  res.json("Server response");
});

server.listen(3001, () => {
  console.log("Server online");
});

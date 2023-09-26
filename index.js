const app = require("express")();
const server = require("http").createServer(app, {
  cors: {
    origin: [
      "https://thequizgame.vercel.app/",
      "https://thequizgame.vercel.app",
      "*",
    ],
    "Access-Control-Allow-Origin": "*",
  },
});
const io = require("socket.io")(server, {
  cors: {
    origin: [
      "https://thequizgame.vercel.app/",
      "https://thequizgame.vercel.app",
      "*",
    ],
    "Access-Control-Allow-Origin": "*",
  },
});
const cors = require("cors");

io.on("connection", (socket) => {
  socket.emit("connect", { message: `Client ${socket.id} connected.` });
});

app.get("/", (req, res) => {
  res.json("Server response");
});

server.listen(3001, () => {
  console.log("Server online");
});

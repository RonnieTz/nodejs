import { Server } from "socket.io";
const express = require("express");
const createServer = require("http");
const app = express();
const cors = require("cors");

const server = createServer(app);
app.use(
  cors({
    origin: ["http://localhost:3000", "https://thequizgame.vercel.app", "*"],
  })
);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`User ${socket.id} connected.`);
});

io.on("data", (message) => {
  io.emit("data", message);
});

app.listen(3001, () => {
  console.log("server online");
});

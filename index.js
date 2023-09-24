"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = require("socket.io");
var io = new socket_io_1.Server(3001, {
  cors: {
    origin: [
      "http://localhost:3000",
      "https://thequizgame.vercel.app/",
      "https://thequizgame.vercel.app",
    ],
    "Access-Control-Allow-Origin": "*",
  },
});
io.on("connection", function (socket) {
  console.log("User ".concat(socket.id, " connected."));
});

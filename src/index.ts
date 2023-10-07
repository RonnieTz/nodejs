import express from "express";
import { createServer } from "http";
const app: express.Application = require("express")();
// const http = require("http").createServer(app, { cors: { origin: "*" } });
import { Server } from "socket.io";
import cors from "cors";
import bodyParser from "body-parser";
// const app: express.Application = express();
const http = createServer(app);

const io = new Server(http, { cors: { origin: "*" } });

app.use(cors({ origin: "*", methods: ["POST", "GET"] }));
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

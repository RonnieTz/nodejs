import express from "express";
import { createServer } from "http";
import cors from "cors";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import { messages, Message } from "./messages/messages.js";
import { rooms, roomCreator } from "./questions/roomCreator.js";
const app = express();
const http = createServer(app);
const io = new Server(http, { cors: { origin: "*" } });
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
io.on("connection", (socket) => {
    console.log(socket.id);
});
app.get("/messages", (req, res) => {
    res.json(messages);
});
app.post("/messages", (req, res) => {
    console.log(req.body);
    const { user, message, id, } = req.body;
    const newMessage = new Message(user, message, id);
    messages.push(newMessage);
    io.emit("message", messages);
    res.json(messages);
});
app.get("/rooms", (req, res) => {
    res.json(rooms);
});
app.post("/rooms", async (req, res) => {
    const { name, number, category, difficulty, id, creator, } = req.body;
    const room = await roomCreator(name, { number, category, difficulty }, id, creator);
    if (rooms.every((item) => item.id !== room.id)) {
        rooms.push(room);
    }
    io.emit("rooms", rooms);
    console.log(req.body);
    res.json(rooms);
});
app.post("/adduser", (req, res) => {
    const { user, room } = req.body;
    const index = rooms.findIndex((item) => item.id === room);
    if (rooms[index]?.users.every((item) => item.name !== user)) {
        rooms[index].addUser(user);
    }
    io.emit("rooms", rooms);
    res.json(rooms);
});
app.post("/exitroom", (req, res) => {
    const { user, room } = req.body;
    const roomIndex = rooms.findIndex((item) => item.id === room);
    const userIndex = rooms[roomIndex].users.findIndex((item) => item.name === user);
    rooms[roomIndex].users.splice(userIndex, 1);
    io.emit("rooms", rooms);
    res.json(rooms);
});
app.post("/updatescore", (req, res) => {
    const { roomID, userName, score, correctAnswers, } = req.body;
    const index = rooms?.findIndex((room) => room.id === roomID);
    rooms[index]?.updateUserScore(userName, score, correctAnswers);
    io.emit("rooms", rooms);
    res.json(rooms);
});
http.listen(3001, () => {
    console.log("Server Online on port 3001");
});
//# sourceMappingURL=index.js.map
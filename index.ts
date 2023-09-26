import { Server } from "socket.io";
const io = new Server(3001, {
  cors: {
    origin: ["http://localhost:3000", "https://thequizgame.vercel.app", "*"],
  },
});

io.on("connection", (socket) => {
  console.log(`User ${socket.id} connected.`);
});

io.on("message", (message) => {
  io.emit("message", message);
});

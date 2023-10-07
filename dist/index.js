import express from "express";
import { createServer } from "http";
import cors from "cors";
import { Server } from "socket.io";
import bodyParser from "body-parser";
const app = express();
const http = createServer(app);
const io = new Server(http, { cors: { origin: "*" } });
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
io.on("connection", (socket) => {
    console.log(socket.id);
});
http.listen(3000, () => {
    console.log("Server Online");
});
//# sourceMappingURL=index.js.map
const app = require("express")();
const http = require("http").createServer(app, { cors: { origin: "*" } });
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log(socket.id);
});

http.listen(3000, () => {
  console.log("server online");
});

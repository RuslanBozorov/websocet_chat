import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
const users = {};
io.on("connection", (socket) => {
  socket.on("name", (name) => {
    users[name] = socket.id;
    console.log(users);
    console.log(Object.keys(users));
  });

  socket.emit("users", Object.keys(users));

  socket.on("xabar", (msg) => {
    io.emit("send-msg", msg);
  });


  
});

server.listen(4545, () => console.log("Server + socket running..."));
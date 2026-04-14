const { Server } = require("socket.io");

const chat = require("../sockets/chat.socket");
const gps = require("../sockets/gps.socket");
const notif = require("../sockets/notification.socket");

module.exports = (server) => {

  const io = new Server(server, {
    cors: { origin: "*" }
  });

  chat(io);
  gps(io);
  notif(io);

  return io;
};
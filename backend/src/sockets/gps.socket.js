// gps socket
module.exports = (io) => {

  io.on("connection", (socket) => {

    socket.on("send_location", (data) => {
      io.emit("receive_location", data);
    });

  });

};
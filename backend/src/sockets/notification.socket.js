// notification socket
module.exports = (io) => {

  io.on("connection", (socket) => {

    socket.on("new_notification", (data) => {
      io.emit("receive_notification", data);
    });

  });

};
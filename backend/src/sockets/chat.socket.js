// chat socket
const Message = require("../models/Message");

module.exports = (io) => {

  io.on("connection", (socket) => {

    socket.on("send_message", async (data) => {

      const msg = await Message.create({
        roomId: data.roomId,
        sender: data.sender,
        message: data.message
      });

      io.emit("receive_message", msg);
    });

  });

};
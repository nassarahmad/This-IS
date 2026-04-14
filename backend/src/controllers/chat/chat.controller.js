// chat controller
const Message = require("../../models/Message");

exports.sendMessage = async (req, res) => {
  const msg = await Message.create({
    roomId: req.params.roomId,
    sender: req.user.id,
    message: req.body.message
  });

  res.json(msg);
};

exports.getMessages = async (req, res) => {
  const msgs = await Message.find({
    roomId: req.params.roomId
  }).populate("sender");

  res.json(msgs);
};
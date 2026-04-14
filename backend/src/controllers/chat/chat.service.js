// chat service
const Message = require('../../models/Message');

exports.sendMessage = async (data) => {
  return await Message.create(data);
};

exports.getMessages = async (user1, user2) => {
  return await Message.find({
    $or: [
      { sender: user1, receiver: user2 },
      { sender: user2, receiver: user1 }
    ]
  }).sort({ createdAt: 1 });
};
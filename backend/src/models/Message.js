// Message model
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  roomId: String,

  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  message: String
}, { timestamps: true });

module.exports = mongoose.model("Message", messageSchema);
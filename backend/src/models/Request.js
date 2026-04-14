// Request model
const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  title: String,
  description: String,

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  helper: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  status: {
    type: String,
    enum: ["open", "accepted", "done"],
    default: "open"
  },

  location: {
    lat: Number,
    lng: Number
  }
}, { timestamps: true });

module.exports = mongoose.model("Request", requestSchema);
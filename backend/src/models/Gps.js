const mongoose = require("mongoose");

const gpsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  lat: Number,
  lng: Number,

  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Gps", gpsSchema);
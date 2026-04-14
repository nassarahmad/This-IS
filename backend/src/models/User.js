const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  role: {
    type: String,
    enum: ["user", "moderator", "admin"],
    default: "user"
  },

  xp: { type: Number, default: 0 },

  location: {
    lat: Number,
    lng: Number
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
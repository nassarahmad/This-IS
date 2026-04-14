// Badge model
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  description: String,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Badge', schema);
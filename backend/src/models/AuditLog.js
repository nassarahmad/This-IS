// AuditLog model
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  action: String,
  details: String
}, { timestamps: true });

module.exports = mongoose.model('AuditLog', schema);
// notifications service
const Notification = require('../../models/Notification');

exports.create = async (data) => {
  return await Notification.create(data);
};

exports.getUserNotifications = async (userId) => {
  return await Notification.find({ user: userId });
};

exports.markAsRead = async (id) => {
  return await Notification.findByIdAndUpdate(id, { read: true }, { new: true });
};
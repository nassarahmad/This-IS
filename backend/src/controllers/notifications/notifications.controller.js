// notifications controller
const service = require('./notifications.service');

exports.get = async (req, res) => {
  res.json(await service.getUserNotifications(req.user.id));
};

exports.read = async (req, res) => {
  res.json(await service.markAsRead(req.params.id));
};
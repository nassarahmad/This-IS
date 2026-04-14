// badges controller
const service = require('./badges.service');

exports.create = async (req, res) => {
  res.json(await service.create(req.body));
};

exports.getAll = async (req, res) => {
  res.json(await service.getAll());
};

exports.assign = async (req, res) => {
  const { badgeId, userId } = req.body;
  res.json(await service.assignToUser(badgeId, userId));
};
// teams controller
const service = require('./teams.service');

exports.create = async (req, res) => {
  res.json(await service.create(req.body));
};

exports.getAll = async (req, res) => {
  res.json(await service.getAll());
};
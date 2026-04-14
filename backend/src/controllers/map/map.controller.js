// map controller
const service = require('./map.service');

exports.getMap = async (req, res) => {
  res.json(await service.getAllLocations());
};
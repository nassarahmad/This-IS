// ai controller
const service = require('./ai.service');

exports.ask = async (req, res) => {
  res.json(await service.askAI(req.body.question));
};
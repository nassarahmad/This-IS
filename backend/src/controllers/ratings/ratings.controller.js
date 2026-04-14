// ratings controller
const service = require('./ratings.service');

exports.rate = async (req, res) => {
  const { userId, rating } = req.body;
  res.json(await service.rateUser(userId, rating));
};
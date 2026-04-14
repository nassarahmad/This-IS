// admin controller
const User = require("../../models/User");
const Request = require("../../models/Request");

exports.dashboard = async (req, res) => {

  const users = await User.countDocuments();
  const requests = await Request.countDocuments();

  const latestUsers = await User.find().sort({ createdAt: -1 }).limit(5);

  res.json({
    users,
    requests,
    latestUsers
  });
};
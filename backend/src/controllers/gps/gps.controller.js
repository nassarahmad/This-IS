// gps controller
const User = require("../../models/User");

exports.updateLocation = async (req, res) => {
  const { lat, lng } = req.body;

  await User.findByIdAndUpdate(req.user.id, {
    location: { lat, lng }
  });

  res.json({ success: true });
};

exports.getNearby = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
// users service
const User = require("../../models/User");
const calc = require("../../utils/xpCalculator");

exports.addXP = async (userId, action) => {

  const user = await User.findById(userId);

  const result = calc(user, action);

  user.xp = result.xp;
  user.level = result.level;

  await user.save();

  return user;
};


const User = require('../../models/User');

exports.getAll = async () => {
  return await User.find();
};

exports.getById = async (id) => {
  return await User.findById(id);
};

exports.update = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

exports.delete = async (id) => {
  return await User.findByIdAndDelete(id);
};
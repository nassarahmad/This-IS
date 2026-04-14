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
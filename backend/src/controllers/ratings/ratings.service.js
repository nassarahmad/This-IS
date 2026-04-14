// ratings service
const User = require('../../models/User');

exports.rateUser = async (userId, rating) => {
  const user = await User.findById(userId);

  user.ratings = user.ratings || [];
  user.ratings.push(rating);

  await user.save();

  return user;
};
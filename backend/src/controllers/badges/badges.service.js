// badges service
const Badge = require('../../models/Badge');

exports.create = async (data) => {
  return await Badge.create(data);
};

exports.getAll = async () => {
  return await Badge.find();
};

exports.assignToUser = async (badgeId, userId) => {
  return await Badge.findByIdAndUpdate(
    badgeId,
    { $push: { users: userId } },
    { new: true }
  );
};
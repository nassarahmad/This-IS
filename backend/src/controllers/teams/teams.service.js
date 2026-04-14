// teams service
const Team = require('../../models/Team');

exports.create = async (data) => {
  return await Team.create(data);
};

exports.getAll = async () => {
  return await Team.find().populate('members');
};
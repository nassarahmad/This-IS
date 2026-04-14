// requests service
const Request = require('../../models/Request');

exports.create = async (data) => {
  return await Request.create(data);
};

exports.getAll = async () => {
  return await Request.find();
};
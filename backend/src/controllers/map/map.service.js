// map service
const Gps = require('../../models/Gps');

exports.getAllLocations = async () => {
  return await Gps.find().populate('user');
};
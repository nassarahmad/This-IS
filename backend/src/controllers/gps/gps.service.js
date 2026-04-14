// gps service
const Gps = require('../../models/Gps');

exports.updateLocation = async (user, lat, lng) => {
  return await Gps.findOneAndUpdate(
    { user },
    { lat, lng },
    { upsert: true, new: true }
  );
};

exports.getNearby = async () => {
  return await Gps.find();
};
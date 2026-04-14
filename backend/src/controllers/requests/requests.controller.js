// requests controller
const Request = require("../../models/Request");

exports.create = async (req, res) => {
  const data = await Request.create({
    ...req.body,
    user: req.user.id
  });

  res.json(data);
};

exports.getMy = async (req, res) => {
  const data = await Request.find({ user: req.user.id });
  res.json(data);
};

exports.accept = async (req, res) => {
  const data = await Request.findByIdAndUpdate(
    req.params.id,
    {
      helper: req.user.id,
      status: "accepted"
    },
    { new: true }
  );

  res.json(data);
};

exports.updateStatus = async (req, res) => {
  const data = await Request.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(data);
};

exports.remove = async (req, res) => {
  await Request.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
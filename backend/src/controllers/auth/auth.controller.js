// auth controller
const User = require("../../models/User");
const {
  generateAccessToken,
  generateRefreshToken
} = require("../../utils/jwt");

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(401).json({ msg: "Invalid credentials" });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    sameSite: "strict"
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "strict"
  });

  res.json({ user });
};

exports.logout = (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  res.json({ msg: "Logged out" });
};

exports.getMe = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};
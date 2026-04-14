// auth routes
const router = require("express").Router();
const ctrl = require("./auth.controller");
const auth = require("../../middleware/authMiddleware");

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);
router.post("/logout", auth, ctrl.logout);
router.get("/me", auth, ctrl.getMe);

module.exports = router;
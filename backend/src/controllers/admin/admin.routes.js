// admin routes
const router = require("express").Router();
const ctrl = require("./admin.controller");
const auth = require("../../middleware/authMiddleware");
const rbac = require("../../middleware/rbacMiddleware");

router.get("/dashboard", auth, rbac("admin"), ctrl.dashboard);

module.exports = router;
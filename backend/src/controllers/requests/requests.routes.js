// requests routes
const router = require("express").Router();
const ctrl = require("./requests.controller");
const auth = require("../../middleware/authMiddleware");
const rbac = require("../../middleware/rbacMiddleware");

router.post("/", auth, ctrl.create);
router.get("/", auth, ctrl.getMy);

router.put("/:id/accept", auth, ctrl.accept);

router.put(
  "/:id/status",
  auth,
  rbac("admin", "moderator"),
  ctrl.updateStatus
);

router.delete(
  "/:id",
  auth,
  rbac("admin"),
  ctrl.remove
);

module.exports = router;
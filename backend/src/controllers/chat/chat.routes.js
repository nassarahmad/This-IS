// chat routes
const router = require("express").Router();
const ctrl = require("./chat.controller");
const auth = require("../../middleware/authMiddleware");

router.post("/rooms/:roomId/messages", auth, ctrl.sendMessage);
router.get("/rooms/:roomId/messages", auth, ctrl.getMessages);

module.exports = router;
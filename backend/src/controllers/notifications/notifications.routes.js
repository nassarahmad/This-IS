// notifications routes
const router = require('express').Router();
const ctrl = require('./notifications.controller');
const auth = require('../../middleware/authMiddleware');

router.get('/', auth, ctrl.get);
router.put('/:id/read', auth, ctrl.read);

module.exports = router;
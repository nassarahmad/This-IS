// gps routes
const router = require('express').Router();
const ctrl = require('./gps.controller');
const auth = require('../../middleware/authMiddleware');

router.post('/', auth, ctrl.update);
router.get('/nearby', auth, ctrl.nearby);

module.exports = router;
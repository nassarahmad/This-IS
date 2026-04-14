// teams routes
const router = require('express').Router();
const ctrl = require('./teams.controller');
const auth = require('../../middleware/authMiddleware');

router.post('/', auth, ctrl.create);
router.get('/', auth, ctrl.getAll);

module.exports = router;
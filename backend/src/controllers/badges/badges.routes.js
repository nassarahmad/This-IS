// badges routes
const router = require('express').Router();
const ctrl = require('./badges.controller');

router.post('/', ctrl.create);
router.get('/', ctrl.getAll);
router.post('/assign', ctrl.assign);

module.exports = router;
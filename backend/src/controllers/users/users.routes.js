// users routes
const router = require('express').Router();
const ctrl = require('./users.controller');
const auth = require('../../middleware/authMiddleware');

router.get('/', auth, ctrl.getAll);
router.get('/:id', auth, ctrl.getById);
router.put('/:id', auth, ctrl.update);
router.delete('/:id', auth, ctrl.delete);

module.exports = router;
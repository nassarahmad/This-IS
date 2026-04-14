// map routes
const router = require('express').Router();
const ctrl = require('./map.controller');

router.get('/', ctrl.getMap);

module.exports = router;
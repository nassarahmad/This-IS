// ai routes
const router = require('express').Router();
const ctrl = require('./ai.controller');

router.post('/', ctrl.ask);

module.exports = router;
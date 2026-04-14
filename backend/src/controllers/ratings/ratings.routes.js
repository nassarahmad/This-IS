// ratings routes
const router = require('express').Router();
const ctrl = require('./ratings.controller');

router.post('/', ctrl.rate);

module.exports = router;
var express = require('express');
var router = express.Router();
var flightsController = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightsController.index);
// GET flights/new
router.get('/new', flightsController.new);
// POST /flights
router.post('/', flightsController.create);


module.exports = router;

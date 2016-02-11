var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/Locations');
var ctrlOthers = require('../controllers/about')

/* GET home page. */
router.get('/about', ctrlOthers.about);
router.get('/', ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location/review/new',ctrlLocations.locationReview);

module.exports = router;

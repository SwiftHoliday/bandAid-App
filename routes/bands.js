// require module
const express = require('express');

// create a router object
const router = express.Router();

// bands controller
const bandsCtrl = require('../controllers/bands');




// Define Routes
router.get('/', bandsCtrl.index); // see all bands
router.get('/new', bandsCtrl.new); // make a new band page


module.exports = router;
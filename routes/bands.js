// require module
const express = require('express');

// create a router object
const router = express.Router();

// bands controller
const bandsCtrl = require('../controllers/bands');


// Define Routes
router.get('/', bandsCtrl.index);  // see all bands
router.get('/new', bandsCtrl.new); // make a new band page
router.post('/', bandsCtrl.create);// create new band
router.get('/:id', bandsCtrl.show);// see band show page
router.delete('/:id', bandsCtrl.deleteBand); // delete band
router.get('/:id/edit', bandsCtrl.editBandName); //edit band
router.put('/:id', bandsCtrl.updateBandName); // update band name

module.exports = router;
// require the modules (express and controller)
const express = require('express');

// require index controller
const indexCtrl = require('../controllers/index');

// create router object
const router = express.Router();


// define routes
router.get('/', indexCtrl.index);

// export router object
module.exports = router;
const express = require('express');

const bandsCtrl = require('../controllers/bands');

const router = express.Router();

router.get('/', bandsCtrl.index);



module.exports = router;
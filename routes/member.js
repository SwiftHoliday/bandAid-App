const express = require('express');
const router = express.Router();
const membersCtrl = require('../controllers/members');

router.get('/bands/:id/members/new', membersCtrl.new);

router.post('/bands/:id/members', membersCtrl.create);

module.exports = router;
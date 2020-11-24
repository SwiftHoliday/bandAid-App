
const Band = require('../models/band')

module.exports = {
    index,
    new: newBand
}

function index(req, res) {
    Band.find({}, function (err, bands) {
        res.render('bands/index', {
            bands,
            user: req.user
        });
    });
}

function newBand(req, res) {
    res.render('bands/new', { title: 'Add New Band' });
}

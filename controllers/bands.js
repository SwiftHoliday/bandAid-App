
const Band = require('../models/band')

module.exports = {
    index
}

function index(req, res) {
    Band.find({}, function (err, bands) {
        res.render('bands/index', { title: 'All Bands', bands });
    });
}
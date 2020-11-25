
const Band = require('../models/band');
const member = require('../models/member');

module.exports = {
    index,
    new: newBand,
    create,
    show,
    deleteBand
}

function index(req, res) {
    Band.find({}, function (err, bands) {
        res.render('bands/index', {
            bands,
            user: req.user
        });
    });
}


function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const band = new Band(req.body);
    band.save(function (err) {
        if (err) return res.redirect('/bands/new');
        res.redirect('/bands');
    });
}

function newBand(req, res) {
    res.render('bands/new', { title: 'Add a New Band' });
}

function show(req, res) {
    Band.findById(req.params.id, function (err, band) {
        member.find({ band: band._id }, function (err, members) {
            
            res.render('bands/show', { title: 'Band Details', });
        });
    });
}


function deleteBand(req, res) {
    Band.findByIdAndDelete(req.params.id, function(err, band) {
        if (err) return res.redirect('/bands');
    });
}
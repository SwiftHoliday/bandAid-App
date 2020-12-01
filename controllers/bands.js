

const Band = require('../models/band');
const Member = require('../models/member');

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
   const band = new Band(req.body); 
    band.save(function (err) {
        if (err) return res.redirect('/bands/new');
        res.redirect('/bands');
    });
}

function newBand(req, res) {
    res.render('bands/new', { title: 'Add a New Band'});
}



// Better Function
function show(req, res) {
    Band.findById(req.params.id, function (err, band) {
        Member.find({ bandId: req.params.id }, function (err, members) {
            console.log(band, members)
            res.render('bands/show', {band, members})
        })
    })
}



function deleteBand(req, res) {
    Band.findByIdAndDelete(req.params.id, function(err, band) {
        if (err) return res.redirect('/bands');
        else return res.redirect('/bands')
    });
}

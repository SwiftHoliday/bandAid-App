const Member = require('../models/member')
const Band = require('../models/band');


module.exports = {
    new: newMember,
    create,
    index
};

function index(req, res) {
    Band.find({}, function (err, bands) {
        res.render('bands/index', {
            bands,
            user: req.user
        });
    });
}

function newMember(req, res) {
    Band.findById(req.params.id, function (err, band) {
        res.render('members/new', { band });  
    })
}

function create(req, res) {
    Band.findById(req.params.id, function (err, band) {
        req.body.bandId = band._id.toString()
        Member.create(req.body, function (err,  members) {
            console.log( err, band, members)
            band.save(function (err) {
            });
            res.redirect(`/bands/${band._id}`)
        });
    });
}


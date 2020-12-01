const Band = require('../models/band');
const Member = require('../models/member');
 
module.exports = {
    index,
    new: newBand,
    create,
    show,
    deleteBand,
    editBandName,
    updateBandName
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




function show(req, res) {
    Band.findById(req.params.id, function (err, band) {
        Member.find({ bandId: req.params.id }, function (err, members) {
            console.log(band, members)
            res.render('bands/show', { band, members })
        });
    });
}



function deleteBand(req, res) {
    Band.findByIdAndDelete(req.params.id, function(err, band) {
        if (err) return res.redirect('/bands');
        else return res.redirect('/bands')
    });
}

function editBandName(req, res) {
    Band.findById({ name: req.body }, req.params.id,
        function (err, band) {
            res.render('bands/edit', { bandId: req.params.id })
        });
        
}

function updateBandName(req, res) {
    Band.findByIdAndUpdate(req.params.id,  req.body,  function(err, band) {
        if (err) {
            console.log(err)
        } else {
            console.log(band, req.params.id)
        }
        res.redirect('/bands')
    })
}
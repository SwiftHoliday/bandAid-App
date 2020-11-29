const Member = require('../models/member')
const Band = require('../models/band');


module.exports = {
    new: newMember,
    create
};


function create(req, res) {
    Band.findById(req.params.id, function (err, band) {
        Member.create(req.body, function (err, member) {
            console.log( err, band, member)
            band.member.push([member])
            band.save(function (err) {
            });
            res.redirect(`/bands/${band._id}`)
        });
    });
}

function newMember(req, res) {
    res.render('members/new', { bandId: req.params.id });
}
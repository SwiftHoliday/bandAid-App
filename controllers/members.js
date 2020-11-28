const Member = require('../models/member')
const Band = require('../models/band');

module.exports = {
    new: newMember,
    create
};

function newMember(req, res) {
    res.render('members/new', {
        bandId: req.params.id
    });
}
////////
function create(req, res) {
    bandId = req.params.id;
    req.body.band = bandId;
    Member.create(req.body, function (err, member) {
        res.redirect(`/bands/${bandId}`);
    });
}
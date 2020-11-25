// require modules
const mongoose = require('mongoose');

// shortcut variables
const Schema = mongoose.Schema;


// defined band Schema
const bandSchema = new Schema({
    name: String,
    googleId: String,
    member: [String]
});





module.exports = mongoose.model('Band', bandSchema);
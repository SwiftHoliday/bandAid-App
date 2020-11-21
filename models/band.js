// require modules
const mongoose = require('mongoose');

// shortcut variables
const Schema = mongoose.Schema;


// defined band Schema
const bandSchema = new Schema({
    name: String,
    genre: String,
    googleId: String
});



const skillSchema = new Schema({
    guitar: String,
    keys: String,
    drums: String,
    bass: String,
    vocals: String
});

module.exports = mongoose.model('Band', bandSchema);
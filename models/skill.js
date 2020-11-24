// require modules
const mongoose = require('mongoose');

// shortcut variables
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    guitar: String,
    keys: String,
    drums: String,
    bass: String,
    vocals: String
});

module.exports = mongoose.model('Skill', skillSchema);
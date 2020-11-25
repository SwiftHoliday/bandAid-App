// require modules
const mongoose = require('mongoose');

// shortcut variables
const Schema = mongoose.Schema;


const memberSchema = new Schema({
    name: String,
    skills: String,
    telephone: Number,
    avatarURL: String,
    googleId: String
});

module.exports = mongoose.model('Member', memberSchema);
// require modules
const mongoose = require('mongoose');

// shortcut variables
const Schema = mongoose.Schema;


const memberSchema = new Schema({
    name: String,
    Skills: [skillSchema],
    avatarURL: String,
    googleId: String
});

module.exports = mongoose.model('Member', memberSchema);
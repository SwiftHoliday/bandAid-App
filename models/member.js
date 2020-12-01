// require modules
const mongoose = require('mongoose');

// shortcut variables
const Schema = mongoose.Schema;



const memberSchema = new Schema({
        name: String,
        skills: String,
        telephone: String,
        email: String,
        bandId: String
});
module.exports = mongoose.model('Member', memberSchema);
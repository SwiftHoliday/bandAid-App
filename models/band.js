// require modules
const mongoose = require('mongoose');

// shortcut variables
const Schema = mongoose.Schema;


// defined band Schema
const bandSchema = new Schema({
    band: {
        type: String,
    }
});





module.exports = mongoose.model('Band', bandSchema);
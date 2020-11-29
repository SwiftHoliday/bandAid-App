// require modules
const mongoose = require('mongoose');
// shortcut variables
const Schema = mongoose.Schema;

const memberSchema = new Schema



// defined band Schema
const bandSchema = new Schema({
    name: String,
    member: [memberSchema]
});

module.exports = mongoose.model('Band', bandSchema);
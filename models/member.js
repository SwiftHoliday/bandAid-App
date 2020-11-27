// require modules
const mongoose = require('mongoose');

// shortcut variables
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    instrument: String
})

const memberSchema = new Schema({
    member: {
        name: String,
        skills: [SkillSchema],
        telephone: String,
        email: String
    }
});
module.exports = mongoose.model('Member', memberSchema);
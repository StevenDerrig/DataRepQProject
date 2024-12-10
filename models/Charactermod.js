const mongoose = require('mongoose');

//Schema for the database, for characters
const characterSchema = new mongoose.Schema({
    characterName: String,
    characterImg: String,
    characterDescription: String,
    characterRole: String,
});

//Exporting the schema
const Charactermod = mongoose.model('Characters', characterSchema);
module.exports = Charactermod;
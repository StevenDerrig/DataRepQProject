const mongoose = require('mongoose');

//Schema for the database, for aircraft
const aircraftSchema = new mongoose.Schema({
    aircraftName: String,
    aircraftImg: String,
    aircraftDescription: String,
    aircraftStats: String,
    aircraftWeapons: String,
    aircraftPrice: Number,
    aircraftUnlock: String,
});

//Exporting the schema
const Aircraftmod = mongoose.model('Aircrafts', aircraftSchema);
module.exports = Aircraftmod;
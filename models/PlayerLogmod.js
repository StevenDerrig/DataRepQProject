const mongoose = require('mongoose');

//Schema for the database, for player logs
const playerLogSchema = new mongoose.Schema({
    plMissionName: String,
    plMissionNumber: String,
    plMissionScore: Number,
    plMissionTime: String,
    plMissionRank: String,
});

//Exporting the schema & naming the collection in the database
const PlayerLogmod = mongoose.model('PlayerLogs', playerLogSchema);
module.exports = PlayerLogmod;
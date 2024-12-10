const mongoose = require('mongoose');

//Schema for the database, for missions
const missionSchema = new mongoose.Schema({
    missionName: String,
    missionNumber: String,
    missionDescription: String,
    missionObjectives: String,
    missionLocation: String,
    missionImg: String,
    missionOST: String,
});

//Exporting the schema
const Missionmod = mongoose.model('Missions', missionSchema);
module.exports = Missionmod;
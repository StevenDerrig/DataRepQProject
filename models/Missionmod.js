const mongoose = require('mongoose');

//Schema for the database, for missions
const missionSchema = new mongoose.Schema({
    missionName: String,
    missionNumber: String,
    missionDescription: String,
    missionObjectives: String,
    missionLocation: String,
    missionOST: String,
});

//Exporting the schema & naming the collection in the database
const Missionmod = mongoose.model('Missions', missionSchema);
module.exports = Missionmod;
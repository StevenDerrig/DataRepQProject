const express = require('express');
const app = express();

const port = 4000;

//database connection and setup
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ProAd:acx2006@clusterxca.rgimj.mongodb.net/?retryWrites=true&w=majority&appName=ClusterXCA')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

//Schema for the database
const missionSchema = new mongoose.Schema({
    missionName: String,
    missionNumber: String,
    missionDescription: String,
    missionObjectives: String,
    missionLocation: String,
    missionImg: String,
    missionOST: String,
});

const aircraftSchema = new mongoose.Schema({
    aircraftName: String,
    aircraftImg: String,
    aircraftDescription: String,
    aircraftStats: String,
    aircraftWeapons: String,
    aircraftPrice: Number,
    aircraftUnlock: String,
});

const characterSchema = new mongoose.Schema({
    characterName: String,
    characterImg: String,
    characterDescription: String,
    characterRole: String,
});

const playerLogSchema = new mongoose.Schema({
    plMissionName: String,
    plMissionNumber: String,
    plMissionScore: Number,
    plMissionTime: String,
    plMissionRank: String,
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
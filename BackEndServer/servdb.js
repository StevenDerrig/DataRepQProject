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

//Parse the request body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Importing the schema models for the database
const Missionmod = require('../models/Missionmod');
const Aircraftmod = require('../models/Aircraftmod');
const Charactermod = require('../models/Charactermod');
const PlayerLogmod = require('../models/PlayerLogmod');

// CORS implementation
const cors = require('cors');
app.use(cors());

//Allow for requests from any origin/domain - specify allowed methds and headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//CRUD operations for the database
//Missions
//Add a mission
app.post('/api/missions', async (req, res) => {
    //Retive the mission details from the form request
    const { missionName, missionNumber, missionDescription, missionObjectives, missionLocation, missionOST } = req.body;
    //Save to database
    const newMission = new Missionmod({
        missionName,
        missionNumber,
        missionDescription,
        missionObjectives,
        missionLocation,
        missionOST
    });
    newMission.save();

    //Confirm that it has been saved
    res.status(201).json({ message: "Mission added successfully", mission: newMission });
});
//Display the missions
app.get('/api/missions', async (req, res) => {
    const missions = await Missionmod.find();
    res.status(200).json({ missions });
});
//Edit a mission
app.put('/api/missions/:id', async (req, res) => {
    const missions = await Missionmod.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(missions);
});
//Delete a mission
app.delete('/api/missions/:id', async (req, res) => {
    console.log('Deleting mission with id: ', req.params.id);
    const missions = await Missionmod.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Mission deleted successfully", missions });
});

//Aircraft
//Add an aircraft
app.post('/api/aircraft', async (req, res) => {
    //Retive the aircraft details from the form request
    const { aircraftName, aircraftImg, aircraftDescription, aircraftStats, aircraftWeapons, aircraftPrice, aircraftUnlock } = req.body;
    //Save to database
    const newAircraft = new Aircraftmod({
        aircraftName,
        aircraftImg,
        aircraftDescription,
        aircraftStats,
        aircraftWeapons,
        aircraftPrice,
        aircraftUnlock
    });
    newAircraft.save();

    //Confirm that it has been saved
    res.status(201).json({ message: "Aircraft added successfully", aircraft: newAircraft });
});
//Display the aircrafts
app.get('/api/aircraft', async (req, res) => {
    const aircraft = await Aircraftmod.find();
    res.status(200).json({ aircraft });
});
//Edit an aircraft
app.put('/api/aircraft/:id', async (req, res) => {
    const aircraft = await Aircraftmod.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(aircraft);
});
//Delete an aircraft
app.delete('/api/aircraft/:id', async (req, res) => {
    console.log('Deleting aircraft with id: ', req.params.id);
    const aircraft = await Aircraftmod.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Aircraft deleted successfully", aircraft });
});

//Characters
//Add a character
app.post('/api/character', async (req, res) => {
    const { characterName, characterImg, characterDescription, characterRole } = req.body;
    const newCharacter = new Charactermod({
        characterName,
        characterImg,
        characterDescription,
        characterRole
    });
    newCharacter.save();
    res.status(201).json({ message: "Character added successfully", character: newCharacter });
});
//Display the characters
app.get('/api/character', async (req, res) => {
    const character = await Charactermod.find();
    res.status(200).json({ character });
});
//Edit a character
app.put('/api/character/:id', async (req, res) => {
    const character = await Charactermod.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(character);
});
//Delete a character
app.delete('/api/character/:id', async (req, res) => {
    console.log('Deleting character with id: ', req.params.id);
    const character = await Charactermod.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Character deleted successfully", character });
});

//Player Logs
//Add a player log
app.post('/api/playerlog', async (req, res) => {
    const { plMissionName, plMissionNumber, plMissionScore, plMissionTime, plMissionRank } = req.body;
    const newPlayerLog = new PlayerLogmod({
        plMissionName,
        plMissionNumber,
        plMissionScore,
        plMissionTime,
        plMissionRank
    });
    newPlayerLog.save();
    res.status(201).json({ message: "Player Log added successfully", playerLog: newPlayerLog });
});
//Display the player logs
app.get('/api/playerlog', async (req, res) => {
    const playerlog = await PlayerLogmod.find();
    res.status(200).json({ playerlog });
});
//Edit a player log
app.put('/api/playerlog/:id', async (req, res) => {
    const playerlog = await PlayerLogmod.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(playerlog);
});
//Delete a player log
app.delete('/api/playerlog/:id', async (req, res) => {
    console.log('Deleting player log with id: ', req.params.id);
    const playerlog = await PlayerLogmod.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Player Log deleted successfully", playerlog });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
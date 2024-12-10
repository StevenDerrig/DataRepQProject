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

//Importing the schema models for the database
const Missionmod = require('./models/Missionmod');
const Aircraftmod = require('./models/Aircraftmod');
const Charactermod = require('./models/Charactermod');
const PlayerLogmod = require('./models/PlayerLogmod');


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
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

// CORS implementation
const cors = require('cors');
app.use(cors());

//Allow for requests from any origin/domain - specify allowed methds and headers
app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
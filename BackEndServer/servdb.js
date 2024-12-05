const express = require('express');
const app = express();

const port = 4000;

//database connection and setup
const mongoose = require('mongoose');
mongoose.connect('');

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
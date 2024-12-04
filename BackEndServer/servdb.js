const express = require('express');
const app = express();

const port = 4000;

//database connection and setup

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
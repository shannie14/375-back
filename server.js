//Node runs on a server not in a browser
//window object is browser
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()

const mongoose = require('mongoose');

// Express Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Connect to database
const DB = process.env.MONGO_URI;
console.log('db', DB);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("SK db connected");
    })
    .catch((err) => console.log(err));

//Endpoints
const userEndpoints = require('./routes/userRoutes')

app.use('/kteams', userEndpoints)

app.listen(process.env.PORT, () => {
    console.log(`Welcome to SK server ${process.env.PORT}`);
});




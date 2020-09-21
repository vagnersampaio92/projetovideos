require('dotenv').config()
const express = require ('express');
const session = require('express-session')
const cors = require('cors');
const path = require("path");

const app = express();
app.use(express.json())
app.use(cors())
app.use(session({
    secret:process.env.SECRET,
    resave: false,
    saveUninitialized:false
}))

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT);
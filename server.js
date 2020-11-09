require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

require('./database')()

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.set("views", "views");

app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.host}:${process.env.PORT}`))
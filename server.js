require('dotenv').config()
const express = require('express')
require('./database')()

const app = express()



app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.host}:${process.env.PORT}`))
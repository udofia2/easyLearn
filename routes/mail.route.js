const express = require('express')
const { mail } = require('./../utils/mail')
const mailer = express.Router()

mailer.route.post('/form').post(mail)
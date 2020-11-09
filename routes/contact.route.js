const express = require('express')
const { form } = require('./../controller/contact.controller')()

const contactRouter = express.Router()

contactRouter.route.post('/form').get(form)

module.exports = contactRouter
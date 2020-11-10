const express = require('express')
const { form } = require('./../controller/contact.controller')()
const { mail } = require('./../utils/mail')

const contactRouter = express.Router()

contactRouter.route('/form').get(form)
contactRouter.route('/form').post(mail)

module.exports = contactRouter
const { CREATED, BAD_REQUEST } = require('http-status-codes')
const nodemailer = require("nodemailer")
const { mailHost,
  mailUser,
  mailPassword,
  mailFrom } = require('../config')
const { usersClient } = require('../client')
const logger = require('../utils/logger')
const log = logger.getLogger('usersController')

const usersController = module.exports


usersController.listUsers = async (req, res) => {
  const { query } = req
  const user = await usersClient.getAllUsers(query)
  res.json(user)
}

usersController.addUsers = async (req, res) => {
  const { body } = req
  const user = await usersClient.addUsers(body)
  res.json(user)
}

usersController.updateUsers = async (req, res) => {
  const { body, query: { id } } = req
  const user = await usersClient.updateUsers(id, body)
  res.json(user)
}

usersController.deleteUsers = async (req, res) => {
  const { query: { id } } = req
  const user = await usersClient.deleteUsers(id)
  res.json(user)
}

usersController.listUsersContar = async (req, res) => {
  const { query } = req
  const user = await usersClient.getUsersContar(query)
  res.json(user)
}

usersController.createColaborador = async (req, res) => {
  const { body } = req
  const user = sendMail('damillano@udistrital.edu.co', 'Solicitud Rdigital', `email=${body.email} razon=${body.reason}`)
  res.json(user)
}

const sendMail = (to, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: mailHost,
    port: 587,
    auth: {
      user: mailUser,
      pass: mailPassword
    },
    tls: {
      rejectUnauthorized: false,
    }
  })

  const options = {
    from: mailFrom,
    to,
    subject,
    text: message,
  }

  transporter.sendMail(options, (error, info) => {
    if (error) console.log(error)
    else console.log(info)
  })

}
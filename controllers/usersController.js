const { CREATED, BAD_REQUEST } = require('http-status-codes')

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
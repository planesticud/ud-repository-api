const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { rolesClient } = require('../client')
const logger = require('../utils/logger')
const log = logger.getLogger('rolesController')

const rolesController = module.exports


rolesController.listRoles = async (req, res) => {
  const { query } = req
  const user = await rolesClient.getAllRoles(query)
  res.json(user)
}

rolesController.addRoles = async (req, res) => {
  const { body } = req
  const user = await rolesClient.addRoles(body)
  res.json(user)
}

rolesController.updateRoles = async (req, res) => {
  const { body, query: { id } } = req
  const user = await rolesClient.updateRoles(id, body)
  res.json(user)
}

rolesController.deleteRoles = async (req, res) => {
  const { query: { id } } = req
  const user = await rolesClient.deleteRoles(id)
  res.json(user)
}

const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { publicarClient } = require('../client')
const logger = require('../utils/logger')
const log = logger.getLogger('publicarController')

const publicarController = module.exports


publicarController.getPublicarAll = async (req, res) => {
    const { query } = req
    const publica = await publicarClient.getPublicarAll(query)
    res.json(publica)
}

publicarController.addPublicar = async (req, res) => {
    const { body } = req
    const publica = await publicarClient.addPublicar(body)
    res.json(publica)
}

publicarController.updatePublicar = async (req, res) => {
    const { body, query: { id } } = req
    const publica = await publicarClient.updatePublicar(id, body)
    res.json(publica)
}

publicarController.deletePublicar = async (req, res) => {
    const { query: { id } } = req
    const publica = await publicarClient.deletePublicar(id)
    res.json(publica)
}
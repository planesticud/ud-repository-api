const {
  CREATED,
  BAD_REQUEST
} = require('http-status-codes')

const {
  stadisticsClient
} = require('../client')
const logger = require('../utils/logger')
const log = logger.getLogger('stadisticsController')

const stadisticsController = module.exports



stadisticsController.listStadistics = async (req, res) => {
  const {
    query
  } = req
  const stadistics = await stadisticsClient.getAllStadistics(query)
  res.json(stadistics)
}

stadisticsController.addStadistics = async (req, res) => {
  const {body} = req
  const stadistics = await stadisticsClient.addStadistics(body)
  res.json(stadistics)
}

stadisticsController.updateStadistics = async (req, res) => {
  const {body,query:{id}} = req
  const stadistics = await stadisticsClient.updateStadistics(id, body)
  res.json(stadistics)
}

stadisticsController.deleteStadistics = async (req, res) => {
  const {
    query: {
      id
    }
  } = req
  const stadistics = await stadisticsClient.deleteStadistics(id)
  res.json(stadistics)
}
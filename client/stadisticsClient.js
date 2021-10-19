const axios = require('axios')

const { stadisticsUrl } = require('../config')
const logger = require('../utils/logger')

const stadisticsClient = module.exports
const log = logger.getLogger('stadisticsClient')


stadisticsClient.addStadistics = async (stadistics) => {
  log.info(`addStadistics stadistics=${JSON.stringify(stadistics)}`)
  const { data } = await axios.post(`${stadisticsUrl}/stadistics`, stadistics)
  return (data)
}
stadisticsClient.getStadisticsByIdObj = async (id_obj) => {
  log.info(`getStadisticsByIdObj idobj=${id_obj} `)
  const { data } = await axios.get(`${stadisticsUrl}/stadistics`, { params: { id_obj } })
  return (data)
}

stadisticsClient.getAllStadistics = async (params) => {
  log.info(`getAllStadistics params=${params} `)
  const {
    data
  } = await axios.get(`${stadisticsUrl}/stadistics`, {
    params: params
  })
  return (data)
}


stadisticsClient.createStadistics = async (stadistics) => {
  log.info(`createStadistics stadistics=${JSON.stringify(stadistics)} `)
  const { data } = await axios.post(`${stadisticsUrl}/stadistics`, stadistics)
  return (data)
}

stadisticsClient.updateStadistics = async (id, body) => {
  log.info(`updateStadistics id=${id} body=${JSON.stringify(body)} `)
  const {
    data
  } = await axios.put(`${stadisticsUrl}/stadistics`, body, {
    params: {
      id
    }
  })
  return (data)
}

stadisticsClient.deleteStadistics = async (id) => {
  log.info(`deleteStadistics id=${id} `)
  const {
    data
  } = await axios.delete(`${stadisticsUrl}/stadistics`, {
    params: {
      id
    }
  })
  return (data)
}
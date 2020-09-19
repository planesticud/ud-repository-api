const axios = require('axios')

const { filesUrl } = require('../config')
const logger = require('../utils/logger')

const filesClient = module.exports
const log = logger.getLogger('filesClient')

filesClient.getFilesByMail = async (email) => {
    log.info(`getFilesByMail email=${email} `)     
    const { data } = await axios.get(`${filesUrl}/metadata`, { params: { email } })
    return(data)
  }

filesClient.addFiles = async (body) => {
    log.info(`addFiles body=${JSON.stringify(body)} `)     
    const { data } = await axios.post(`${filesUrl}/metadata`, body)
    return(data)
  }

filesClient.updateFile = async (id, body) => {
    log.info(`updateFile id=${id} body=${JSON.stringify(body)} `)     
    const { data } = await axios.put(`${filesUrl}/metadata`, body, { params: { id } })
    return(data)
  }

filesClient.deleteFile = async (id) => {
    log.info(`deleteFile id=${id}`)     
    const { data } = await axios.delete(`${filesUrl}/metadata`, { params: { id } })
    return(data)
  }

filesClient.getGeneral = async (query) => {
    log.info(`getGeneral query=${query} `)     
    const { data } = await axios.get(`${filesUrl}/general`, { params: query })
    return(data)
  }

filesClient.addGeneral = async (body) => {
    log.info(`addGeneral body=${JSON.stringify(body)} `)     
    const { data } = await axios.post(`${filesUrl}/general`, body)
    return(data)
  }

filesClient.updateGeneral = async (id, body) => {
    log.info(`updateGeneral id=${id} body=${JSON.stringify(body)} `)     
    const { data } = await axios.put(`${filesUrl}/general`, body, { params: { id } })
    return(data)
  }

filesClient.deleteGeneral = async (id) => {
    log.info(`deleteGeneral id=${id}`)     
    const { data } = await axios.delete(`${filesUrl}/general`, { params: { id } })
    return(data)
  }
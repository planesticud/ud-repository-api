const axios = require('axios')

const { usersUrl } = require('../config')
const logger = require('../utils/logger')

const usersClient = module.exports
const log = logger.getLogger('usersClient')

usersClient.getUsers = async (email) => {
    log.info(`getUsers email=${email} `)     
    const { data } = await axios.get(`${usersUrl}/users`, { params: { email } })
    return(data)
  }

  usersClient.getAllUsers = async (params) => {
    log.info(`getAllUsers params=${params} `)     
    const { data } = await axios.get(`${usersUrl}/users`, { params:params })
    return(data)
  }

usersClient.addUsers = async (user) => {
    log.info(`addUsers user=${JSON.stringify(user)} `)     
    const { data } = await axios.post(`${usersUrl}/users`, user)
    return(data)
  }

  usersClient.updateUsers = async (id, body) => {
    log.info(`updateUsers id=${id} body=${JSON.stringify(body)} `)     
    const { data } = await axios.put(`${usersUrl}/users`, body, { params: { id } })
    return(data)
  }

  usersClient.deleteUsers = async (id) => {
    log.info(`deleteUsers id=${id} `)     
    const { data } = await axios.delete(`${usersUrl}/users`, { params: { id } })
    return(data)
  }
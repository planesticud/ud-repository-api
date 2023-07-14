const axios = require('axios')

const { usersUrl } = require('../config')
const logger = require('../utils/logger')

const rolesClient = module.exports
const log = logger.getLogger('rolesClient')

rolesClient.getRoles = async (email) => {
    log.info(`getRoles email=${email} `)     
    const { data } = await axios.get(`${usersUrl}/roles`, { params: { email } })
    return(data)
  }

  rolesClient.getAllRoles = async (params) => {
    log.info(`getAllRoles params=${params} `)     
    const { data } = await axios.get(`${usersUrl}/roles`, { params:params })
    return(data)
  }

rolesClient.addRoles = async (user) => {
    log.info(`addRoles user=${JSON.stringify(user)} `)     
    const { data } = await axios.post(`${usersUrl}/roles`, user)
    return(data)
  }

  rolesClient.updateRoles = async (id, body) => {
    log.info(`updateRoles id=${id} body=${JSON.stringify(body)} `)     
    const { data } = await axios.put(`${usersUrl}/roles`, body, { params: { id } })
    return(data)
  }

  rolesClient.deleteRoles = async (id) => {
    log.info(`deleteRoles id=${id} `)     
    const { data } = await axios.delete(`${usersUrl}/roles`, { params: { id } })
    return(data)
  }
  
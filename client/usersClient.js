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

usersClient.addUsers = async (user) => {
    log.info(`addUsers user=${JSON.stringify(user)} `)     
    const { data } = await axios.post(`${usersUrl}/users`, user)
    return(data)
  }
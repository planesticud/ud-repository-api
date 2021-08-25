const axios = require('axios')

const { publicarUrl } = require('../config')
const logger = require('../utils/logger')

const publicarClient = module.exports
const log = logger.getLogger('publicarClient')

publicarClient.getPublicarById = async (id) => {
    log.info(`getPublicarById id=${id} `)
    const { data } = await axios.get(`${publicarUrl}/publicar`, { params: { id } })
    return (data)
}

publicarClient.getPublicarByIdObj = async (idobj) => {
    log.info(`getPublicarByIdObj idobj=${idobj} `)
    const { data } = await axios.get(`${publicarUrl}/publicar`, { params: { idobj } })
    return (data)
}

publicarClient.getPublicarByRevisor = async (revisor) => {
    log.info(`getPublicarByRevisor revisor=${revisor} `)
    const { data } = await axios.get(`${publicarUrl}/publicar`, { params: { revisor } })
    return (data)
}

publicarClient.getPublicarAll = async (params) => {
    log.info(`getPublicarAll params=${params} `)
    const { data } = await axios.get(`${publicarUrl}/publicar`,{ params:params })
    return (data)
}

publicarClient.addPublicar = async (publicar) => {
    log.info(`addPublicar publicar=${JSON.stringify(publicar)} `)
    const { data } = await axios.post(`${publicarUrl}/publicar`, publicar)
    return (data)
}

publicarClient.updatePublicar = async (id, body) => {
    log.info(`updatePublicar id=${id} body=${JSON.stringify(body)} `)
    const { data } = await axios.put(`${publicarUrl}/publicar`, body, { params: { id } })
    return (data)
}

publicarClient.deletePublicar = async (id) => {
    log.info(`deletePublicar id=${id} `)
    const { data } = await axios.delete(`${publicarUrl}/publicar`, { params: { id } })
    return (data)
}
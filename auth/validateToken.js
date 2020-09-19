const { UNAUTHORIZED, BAD_REQUEST  } = require('http-status-codes')
const axios = require('axios')

const wrap = require('../wrap')
const logger = require('../utils/logger')
const { googleUrlToken } = require('../config')

const log = logger.getLogger('validateToken')

module.exports = wrap(async (req,res, next) => {
    const { authorization } = req.headers
    if(!authorization){
       throw res.status(BAD_REQUEST).json({ error: 'token_not_found' })
    }
    const tokenData = await validToken(authorization)
    if(tokenData.error){
        throw res.status(BAD_REQUEST).json({ error: 'invalid_token' })
    }
    req.user = tokenData
    log.info(tokenData)
   next()
})



const validToken = async (token) => {
    log.info(`validToken token=${token} `)     
    const { data } = await axios.get(`${googleUrlToken}/tokeninfo`, { params: { access_token: token } })
    return(data)
  }
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


filesClient.getLifecycle = async (query) => {
  log.info(`getLifecycle query=${query} `)     
  const { data } = await axios.get(`${filesUrl}/lifecycle`, { params: query })
  return(data)
}

filesClient.addLifecycle = async (body) => {
    log.info(`addLifecycle body=${JSON.stringify(body)} `)     
    const { data } = await axios.post(`${filesUrl}/lifecycle`, body)
    return(data)
  }

filesClient.updateLifecycle = async (id, body) => {
    log.info(`updateLifecycle id=${id} body=${JSON.stringify(body)} `)     
    const { data } = await axios.put(`${filesUrl}/lifecycle`, body, { params: { id } })
    return(data)
  }

filesClient.deleteLifecycle = async (id) => {
  log.info(`deleteLifecycle id=${id}`)     
  const { data } = await axios.delete(`${filesUrl}/lifecycle`, { params: { id } })
  return(data)
} 


filesClient.getMetametadata = async (query) => {
  log.info(`getMetametadata query=${query} `)     
  const { data } = await axios.get(`${filesUrl}/meta_metadata`, { params: query })
  return(data)
}

filesClient.addMetametadata = async (body) => {
    log.info(`addMetametadata body=${JSON.stringify(body)} `)     
    const { data } = await axios.post(`${filesUrl}/meta_metadata`, body)
    return(data)
  }

filesClient.updateMetametadata = async (id, body) => {
    log.info(`updateMetametadata id=${id} body=${JSON.stringify(body)} `)     
    const { data } = await axios.put(`${filesUrl}/meta_metadata`, body, { params: { id } })
    return(data)
  }

filesClient.deleteMetametadata = async (id) => {
    log.info(`deleteMetametadata id=${id}`)     
    const { data } = await axios.delete(`${filesUrl}/meta_metadata`, { params: { id } })
    return(data)
  } 
  
  
filesClient.getTechnicalRequirements = async (query) => {
  log.info(`getTechnicalRequirements query=${query} `)     
  const { data } = await axios.get(`${filesUrl}/technical_requirements`, { params: query })
  return(data)
}

filesClient.addTechnicalRequirements = async (body) => {
    log.info(`addTechnicalRequirements body=${JSON.stringify(body)} `)     
    const { data } = await axios.post(`${filesUrl}/technical_requirements`, body)
    return(data)
  }

filesClient.updateTechnicalRequirements = async (id, body) => {
    log.info(`updateTechnicalRequirements id=${id} body=${JSON.stringify(body)} `)     
    const { data } = await axios.put(`${filesUrl}/technical_requirements`, body, { params: { id } })
    return(data)
  }

filesClient.deleteTechnicalRequirements = async (id) => {
    log.info(`deleteTechnicalRequirements id=${id}`)     
    const { data } = await axios.delete(`${filesUrl}/technical_requirements`, { params: { id } })
    return(data)
  }


filesClient.getPedagogicalRequirements = async (query) => {
  log.info(`getPedagogicalRequirements query=${query} `)     
  const { data } = await axios.get(`${filesUrl}/pedagogical_requirements`, { params: query })
  return(data)
}

filesClient.addPedagogicalRequirements = async (body) => {
    log.info(`addPedagogicalRequirements body=${JSON.stringify(body)} `)     
    const { data } = await axios.post(`${filesUrl}/pedagogical_requirements`, body)
    return(data)
}

filesClient.updatePedagogicalRequirements = async (id, body) => {
    log.info(`updatePedagogicalRequirements id=${id} body=${JSON.stringify(body)} `)     
    const { data } = await axios.put(`${filesUrl}/pedagogical_requirements`, body, { params: { id } })
    return(data)
}

filesClient.deletePedagogicalRequirements = async (id) => {
    log.info(`deletePedagogicalRequirements id=${id}`)     
    const { data } = await axios.delete(`${filesUrl}/pedagogical_requirements`, { params: { id } })
    return(data)
}


filesClient.getRightsOfUse = async (query) => {
  log.info(`getRightsOfUse query=${query} `)     
  const { data } = await axios.get(`${filesUrl}/rights_of_use`, { params: query })
  return(data)
}

filesClient.addRightsOfUse = async (body) => {
  log.info(`addRightsOfUse body=${JSON.stringify(body)} `)     
  const { data } = await axios.post(`${filesUrl}/rights_of_use`, body)
  return(data)
}

filesClient.updateRightsOfUse = async (id, body) => {
  log.info(`updateRightsOfUse id=${id} body=${JSON.stringify(body)} `)     
  const { data } = await axios.put(`${filesUrl}/rights_of_use`, body, { params: { id } })
  return(data)
}

filesClient.deleteRightsOfUse = async (id) => {
  log.info(`deleteRightsOfUse id=${id}`)     
  const { data } = await axios.delete(`${filesUrl}/rights_of_use`, { params: { id } })
  return(data)
}


filesClient.getAnotation = async (query) => {
  log.info(`getAnotation query=${query} `)     
  const { data } = await axios.get(`${filesUrl}/anotation`, { params: query })
  return(data)
}

filesClient.addAnotation = async (body) => {
  log.info(`addAnotation body=${JSON.stringify(body)} `)     
  const { data } = await axios.post(`${filesUrl}/anotation`, body)
  return(data)
}

filesClient.updateAnotation = async (id, body) => {
  log.info(`updateAnotation id=${id} body=${JSON.stringify(body)} `)     
  const { data } = await axios.put(`${filesUrl}/anotation`, body, { params: { id } })
  return(data)
}

filesClient.deleteAnotation = async (id) => {
  log.info(`deleteAnotation id=${id}`)     
  const { data } = await axios.delete(`${filesUrl}/anotation`, { params: { id } })
  return(data)
}

filesClient.getClassification = async (query) => {
  log.info(`getClassification query=${query} `)     
  const { data } = await axios.get(`${filesUrl}/classification`, { params: query })
  return(data)
}

filesClient.addClassification = async (body) => {
  log.info(`addClassification body=${JSON.stringify(body)} `)     
  const { data } = await axios.post(`${filesUrl}/classification`, body)
  return(data)
}

filesClient.updateClassification = async (id, body) => {
  log.info(`updateClassification id=${id} body=${JSON.stringify(body)} `)     
  const { data } = await axios.put(`${filesUrl}/classification`, body, { params: { id } })
  return(data)
}

filesClient.deleteClassification = async (id) => {
  log.info(`deleteClassification id=${id}`)     
  const { data } = await axios.delete(`${filesUrl}/classification`, { params: { id } })
  return(data)
}
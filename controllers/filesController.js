const { CREATED, BAD_REQUEST } = require('http-status-codes')

const logger = require('../utils/logger')
const { uploadFile } = require('../utils/s3')
const { uploadScorm } = require('../utils/s3Folder')
const { filesClient } = require('../client')
const { urlS3Base } = require('../config')
const filesController = module.exports
const log = logger.getLogger('filesController')
const mime = require('mime-types')

filesController.listFiles = async (req, res) => {
    const { query: { email } } = req
    const files = await filesClient.getFilesByMail(email)
    res.json(files)
}

filesController.addFiles = async (req, res) => {
    const { body } = req
    const generalBody = {
        title: body.title,
        language: body.language,
        description: body.description,
        key_words: body.key_words
    }
    const newGeneral = await filesClient.addGeneral(generalBody)
    const lifeCycleBody = {
        version: body.version,
        state: body.state,
        participants: body.participants
    }
    const newLifeCycle = await filesClient.addLifecycle(lifeCycleBody)
    const technicalRequirementsBody = {
        format:body.format,
        size: body.size,
        location:body.location,
        requierements:body.requierements
    }
    const newTechnicalRequirements = await filesClient.addTechnicalRequirements(technicalRequirementsBody)
    const pedagogicalRequirementsBody = {
        type_interaction: body.class_learning,
        semantic_density: body.type_of_educational_resource,
        level_interaction : body.level_of_interaction,
        difficulty: body.objetive_poblation,
        context: body.context
    }
    const newPedagogicalRequirements = await filesClient.addPedagogicalRequirements(pedagogicalRequirementsBody)

    const rightsOfUseBody = {
        cost: body.cost,
        copyright: body.copyright
    }
    const newRightsOfUse = await filesClient.addRightsOfUse(rightsOfUseBody)
    
    const anotationBody = {
        entity: body.entity,
        date: body.date
    }
    const newAnotation = await filesClient.addAnotation(anotationBody)

    const classificationBody = {
        purpose: body.purpose
    }
    const newClassification = await filesClient.addClassification(classificationBody)

    const metadata = {
        email: body.email,
        general: newGeneral.id,
        lifecycle: newLifeCycle.id,
        technical_requirements: newTechnicalRequirements.id,
        pedagogical_requirements: newPedagogicalRequirements.id,
        rights_of_use: newRightsOfUse.id,
        anotation: newAnotation.id,
        classification: newClassification.id
    }
    const files = await filesClient.addFiles(metadata)
    log.info(JSON.stringify( metadata))
    log.info(files)
    res.json(files)
}

filesController.updateFile = async (req, res) => {
    const {  body, query: { id } } = req
    const files = await filesClient.updateFile(id, body)
    res.json(files)
}

filesController.uploadFiles = async (req, res) => {
    log.info('createFiles')
   
    if(req.files){
        
        const file = req.files.file

        log.info(`upload file=${file.name}`)
        await file.mv(`./tmp/${file.name}`)
        const fileType = mime.lookup(file.name)
        log.info(`file type= ${fileType}`)
        let url = ''
        if(fileType === 'application/zip'){
            uploadScorm(file.name, './tmp')
            url= `${urlS3Base}/${file.name.slice(0, -4)}/story.html`
            log.info(`upload file to s3=${url}`)
        res.json({url: url})
        }else{
            url = uploadFile(file.name)
            log.info(`upload file to s3=${url}`)
            res.json({url: url})
        }
      
    }else{
        log.error('file not found')
        res.status(400).json({error: 'file_not_found'})
    }
    
}

filesController.deleteFile = async (req, res) => {
    const { query: { id } } = req
    const files = await filesClient.deleteFile(id)
    res.json(files)
}

filesController.listGeneral = async (req, res) => {
    const { query } = req
    const general = await filesClient.getGeneral(query)
    res.json(general)
}

filesController.addGeneral = async (req, res) => {
    const { body } = req
    const general = await filesClient.addGeneral(body)
    res.json(general)
}

filesController.updateGeneral = async (req, res) => {
    const {  body, query: { id } } = req
    const general = await filesClient.updateGeneral(id, body)
    res.json(general)
}

filesController.deleteGeneral = async (req, res) => {
    const { query: { id } } = req
    const general = await filesClient.deleteGeneral(id)
    res.json(general)
}


filesController.listLifecycle = async (req, res) => {
    const { query } = req
    const lifecycle = await filesClient.getLifecycle(query)
    res.json(lifecycle)
}

filesController.addLifecycle = async (req, res) => {
    const { body } = req
    const lifecycle = await filesClient.addLifecycle(body)
    res.json(lifecycle)
}

filesController.updateLifecycle = async (req, res) => {
    const {  body, query: { id } } = req
    const lifecycle = await filesClient.updateLifecycle(id, body)
    res.json(lifecycle)
}

filesController.deleteLifecycle = async (req, res) => {
    const { query: { id } } = req
    const lifecycle = await filesClient.deleteLifecycle(id)
    res.json(lifecycle)
}


filesController.listMetametadata = async (req, res) => {
    const { query } = req
    const metametadata = await filesClient.getMetametadata(query)
    res.json(metametadata)
}

filesController.addMetametadata = async (req, res) => {
    const { body } = req
    const metametadata = await filesClient.addMetametadata(body)
    res.json(metametadata)
}

filesController.updateMetametadata = async (req, res) => {
    const {  body, query: { id } } = req
    const metametadata = await filesClient.updateMetametadata(id, body)
    res.json(metametadata)
}

filesController.deleteMetametadata = async (req, res) => {
    const { query: { id } } = req
    const metametadata = await filesClient.deleteMetametadata(id)
    res.json(metametadata)
}


filesController.listTechnicalRequirements = async (req, res) => {
    const { query } = req
    const technicalRequirements = await filesClient.getTechnicalRequirements(query)
    res.json(technicalRequirements)
}

filesController.addTechnicalRequirements = async (req, res) => {
    const { body } = req
    const technicalRequirements = await filesClient.addTechnicalRequirements(body)
    res.json(technicalRequirements)
}

filesController.updateTechnicalRequirements = async (req, res) => {
    const {  body, query: { id } } = req
    const technicalRequirements = await filesClient.updateTechnicalRequirements(id, body)
    res.json(technicalRequirements)
}

filesController.deleteTechnicalRequirements = async (req, res) => {
    const { query: { id } } = req
    const technicalRequirements = await filesClient.deleteTechnicalRequirements(id)
    res.json(technicalRequirements)
}


filesController.listPedagogicalRequirements = async (req, res) => {
    const { query } = req
    const pedagogicalRequirements = await filesClient.getPedagogicalRequirements(query)
    res.json(pedagogicalRequirements)
}

filesController.addPedagogicalRequirements = async (req, res) => {
    const { body } = req
    const pedagogicalRequirements = await filesClient.addPedagogicalRequirements(body)
    res.json(pedagogicalRequirements)
}

filesController.updatePedagogicalRequirements = async (req, res) => {
    const {  body, query: { id } } = req
    const pedagogicalRequirements = await filesClient.updatePedagogicalRequirements(id, body)
    res.json(pedagogicalRequirements)
}

filesController.deletePedagogicalRequirements = async (req, res) => {
    const { query: { id } } = req
    const pedagogicalRequirements = await filesClient.deletePedagogicalRequirements(id)
    res.json(pedagogicalRequirements)
}


filesController.listRightsOfUse = async (req, res) => {
    const { query } = req
    const rightsOfUse = await filesClient.getRightsOfUse(query)
    res.json(rightsOfUse)
}

filesController.addRightsOfUse = async (req, res) => {
    const { body } = req
    const rightsOfUse = await filesClient.addRightsOfUse(body)
    res.json(rightsOfUse)
}

filesController.updateRightsOfUse = async (req, res) => {
    const {  body, query: { id } } = req
    const rightsOfUse = await filesClient.updateRightsOfUse(id, body)
    res.json(rightsOfUse)
}

filesController.deleteRightsOfUse = async (req, res) => {
    const { query: { id } } = req
    const rightsOfUse = await filesClient.deleteRightsOfUse(id)
    res.json(rightsOfUse)
}


filesController.listAnotation = async (req, res) => {
    const { query } = req
    const anotation = await filesClient.getAnotation(query)
    res.json(anotation)
}

filesController.addAnotation = async (req, res) => {
    const { body } = req
    const anotation = await filesClient.addAnotation(body)
    res.json(anotation)
}

filesController.updateAnotation = async (req, res) => {
    const {  body, query: { id } } = req
    const anotation = await filesClient.updateAnotation(id, body)
    res.json(anotation)
}

filesController.deleteAnotation = async (req, res) => {
    const { query: { id } } = req
    const anotation = await filesClient.deleteAnotation(id)
    res.json(anotation)
}


filesController.listClassification = async (req, res) => {
    const { query } = req
    const classification = await filesClient.getClassification(query)
    res.json(classification)
}

filesController.addClassification = async (req, res) => {
    const { body } = req
    const classification = await filesClient.addClassification(body)
    res.json(classification)
}

filesController.updateClassification = async (req, res) => {
    const {  body, query: { id } } = req
    const classification = await filesClient.updateClassification(id, body)
    res.json(classification)
}

filesController.deleteClassification = async (req, res) => {
    const { query: { id } } = req
    const classification = await filesClient.deleteClassification(id)
    res.json(classification)
}
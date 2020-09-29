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
    const files = await filesClient.addFiles(body)
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
            url = await uploadScorm(file.name, './tmp')
            //url= `${urlS3Base}/${file.name.slice(0, -4)}/story.html`
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

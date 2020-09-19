const AWS = require('aws-sdk')
const fs = require('fs')
const mime = require('mime-types')
const {
    bucketName,
    urlS3Base,
    acl
 } = require('../config')
const s3 = new AWS.S3()

const uploadFile = (fileName,folder=null) => {

    const fileContent = fs.readFileSync(`./tmp/${fileName}`)
    const ContentType = mime.lookup(fileName)
    
    let fold = ''
    if(folder){
      fold = `${folder}/`
    }
    const realName = `${fold}${Date.now()}${fileName}`
    const params = {
        Bucket: bucketName,
        Key:  realName,
        Body: fileContent,
        ACL: acl,
        ContentType: ContentType,
        ContentDisposition: 'inline'
    }

    s3.putObject(params, (err, data)=> {
        if (err) { throw err }
    })
    return `${urlS3Base}/${realName}`
}

module.exports = {
    uploadFile
}
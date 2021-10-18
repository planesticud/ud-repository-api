const s3FolderUpload = require('s3-folder-upload')
const extract = require('extract-zip')
const { resolve } = require('path')
const rimraf = require('rimraf')


const {
  credentials,
  urlS3Base
} = require('../config')

const uploadScorm = async (fileName, directoryName) => {
  const fileNameSlice = fileName.slice(0, -4)
  const path = resolve(`${directoryName}/${fileNameSlice}`)
  console.log(path)
  await extract(`${directoryName}/${fileName}`, { dir: path })

  const options = {
    useFoldersForFileTypes: false,
    useIAMRoleCredentials: false,
    uploadFolder: fileNameSlice
  }

  await s3FolderUpload(`${directoryName}/${fileNameSlice}`, credentials, options)
  rimraf(`${directoryName}/${fileNameSlice}`, () => { console.log("done"); });
  rimraf(`${directoryName}/${fileName}`, () => { console.log("done"); });
  return `${urlS3Base}/${fileNameSlice}/story.html`
}

module.exports = { uploadScorm }

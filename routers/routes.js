const express = require('express')
const passport = require('passport')

const { OK } = require('http-status-codes')

const wrap = require('../wrap.js')
const { routers } = require('../constants')
const auth = require('../auth/validateToken')
const { apiController, filesController } = require('../controllers')

const router = express.Router()

router.get(routers.CALLBACK, passport.authenticate('google', { scope: ['email', 'profile'] }), wrap(apiController.callback))

router.get(routers.GOOGLE, passport.authenticate('google', { scope: ['email', 'profile'] }), (req, res) => { });

router.post(routers.UPLOAD, wrap(filesController.uploadFiles))


router.get(routers.FILES, wrap(filesController.listFilesById))

router.get(routers.FILES_MAIL, wrap(filesController.listFilesByEmail))

router.post(routers.FILES, wrap(filesController.addFiles))

router.put(routers.FILES, wrap(filesController.updateFile))

router.delete(routers.FILES, wrap(filesController.deleteFile))


router.get(routers.GENERAL, wrap(filesController.listGeneral))

router.post(routers.GENERAL, wrap(filesController.addGeneral))

router.put(routers.GENERAL, wrap(filesController.updateGeneral))

router.delete(routers.GENERAL, wrap(filesController.deleteGeneral))


router.get(routers.LIFECYCLE, wrap(filesController.listLifecycle))

router.post(routers.LIFECYCLE, wrap(filesController.addLifecycle))

router.put(routers.LIFECYCLE, wrap(filesController.updateLifecycle))

router.delete(routers.LIFECYCLE, wrap(filesController.deleteLifecycle))


router.get(routers.META_METADATA, wrap(filesController.listMetametadata))

router.post(routers.META_METADATA, wrap(filesController.addMetametadata))

router.put(routers.META_METADATA, wrap(filesController.updateMetametadata))

router.delete(routers.META_METADATA, wrap(filesController.deleteMetametadata))


router.get(routers.TECHNICAL_REQUIEREMENTS, wrap(filesController.listTechnicalRequirements))

router.post(routers.TECHNICAL_REQUIEREMENTS, wrap(filesController.addTechnicalRequirements))

router.put(routers.TECHNICAL_REQUIEREMENTS, wrap(filesController.updateTechnicalRequirements))

router.delete(routers.TECHNICAL_REQUIEREMENTS, wrap(filesController.deleteTechnicalRequirements))


router.get(routers.PEDAGOGICAL_REQUIEREMENTS, wrap(filesController.listPedagogicalRequirements))

router.post(routers.PEDAGOGICAL_REQUIEREMENTS, wrap(filesController.addPedagogicalRequirements))

router.put(routers.PEDAGOGICAL_REQUIEREMENTS, wrap(filesController.updatePedagogicalRequirements))

router.delete(routers.PEDAGOGICAL_REQUIEREMENTS, wrap(filesController.deletePedagogicalRequirements))


router.get(routers.RIGHTS_OF_USE, wrap(filesController.listRightsOfUse))

router.post(routers.RIGHTS_OF_USE, wrap(filesController.addRightsOfUse))

router.put(routers.RIGHTS_OF_USE, wrap(filesController.updateRightsOfUse))

router.delete(routers.RIGHTS_OF_USE, wrap(filesController.deleteRightsOfUse))



router.get(routers.ANOTATIONS, wrap(filesController.listAnotation))

router.post(routers.ANOTATIONS, wrap(filesController.addAnotation))

router.put(routers.ANOTATIONS, wrap(filesController.updateAnotation))

router.delete(routers.ANOTATIONS, wrap(filesController.deleteAnotation))


router.get(routers.CLASSIFICACION, wrap(filesController.listClassification))

router.post(routers.CLASSIFICACION, wrap(filesController.addClassification))

router.put(routers.CLASSIFICACION, wrap(filesController.updateClassification))

router.delete(routers.CLASSIFICACION, wrap(filesController.deleteClassification))



router.get(routers.HEALTH, wrap(async (req, res) => {
    res.status(OK).json({ message: 'OK' })
  }))


module.exports = router
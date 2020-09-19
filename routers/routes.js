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


router.get(routers.FILES, wrap(filesController.listFiles))

router.post(routers.FILES, wrap(filesController.addFiles))

router.put(routers.FILES, wrap(filesController.updateFile))

router.delete(routers.FILES, wrap(filesController.deleteFile))


router.get(routers.GENERAL, wrap(filesController.listGeneral))

router.post(routers.GENERAL, wrap(filesController.addGeneral))

router.put(routers.GENERAL, wrap(filesController.updateGeneral))

router.delete(routers.GENERAL, wrap(filesController.deleteGeneral))

router.get(routers.HEALTH, wrap(async (req, res) => {
    res.status(OK).json({ message: 'OK' })
  }))

module.exports = router
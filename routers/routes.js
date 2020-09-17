const express = require('express')
const passport = require('passport')

const { OK } = require('http-status-codes')

const wrap = require('../wrap.js')
const { routers } = require('../constants')
const auth = require('../auth/validateToken')
const { apiController } = require('../controllers')

const router = express.Router()

router.get('/callback', passport.authenticate('google', { scope: ['email', 'profile'] }), wrap(apiController.callback))



router.get('/', passport.authenticate('google', { scope: ['email', 'profile'] }), (req, res) => { });

router.get('/test',auth, (req, res) => {
  res.json(req.user)
})

router.get(routers.HEALTH, wrap(async (req, res) => {
    res.status(OK).json({ message: 'OK' })
  }))

module.exports = router
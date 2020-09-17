const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { usersClient } = require('../client')
const logger = require('../utils/logger')
const log = logger.getLogger('apiController')

const apiController = module.exports


apiController.callback = async (req, res) => {
  const { user: { emails, displayName, token } } = req
  log.info(token)
  const email = emails[0].value
  const user = await usersClient.getUsers(email)
  if (user.length) {
    return res.json(user[0])
  } else {
    const newUser = await usersClient.addUsers({
      name: displayName,
      email: email,
      rol: "ESTUDIANTE"
    })
    const user = await usersClient.getUsers(email)
    if (user.length) {
      return res.json(user[0])
    } else {
      return res.status(BAD_REQUEST).json({ error: 'user error' })
    }
  }

}

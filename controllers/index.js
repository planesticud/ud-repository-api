const apiController = require('./apiController')
const filesController = require('./filesController')
const usersController = require('./rolesController')
const rolesController = require('./usersController')
const publicarController = require('./publicarController')
const stadisticsController = require('./stadisticsController')

module.exports = {
    apiController,
    filesController,
    usersController,
    publicarController,
    stadisticsController,
    rolesController
}
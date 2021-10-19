const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const fileUpload = require('express-fileupload')

const googleStratergy = require('./auth/googleStrategy')

const logger = require('./utils/logger')
const { port } = require('./config')
const { routes } = require('./routers')

const log = logger.getLogger('index.js')
const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(passport.initialize())

app.use(bodyParser.json())
app.use(fileUpload({
    createParentPath: true
}));

app.use(routes)

app.listen(port, () => {
    log.info(`servidor en puerto ${port}`)
})

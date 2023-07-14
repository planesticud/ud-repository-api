const AUTH = '/auth'
const USERS = '/users'
const ROLES = '/roles'
const FILES = '/files'
const FILES_MAIL = `${FILES}/email`
const FILES_ALL = `${FILES}/all`
const GENERAL = `${FILES}/general`
const UPLOAD = '/upload'
const CALLBACK = '/callback'
const MICROSOFT = '/microsoft'
const MICROSOFT_CALLBACK = `${MICROSOFT}${CALLBACK}`
const GOOGLE = '/google'
const LIFECYCLE = '/lifecycle'
const META_METADATA = '/meta_metadata'
const TECHNICAL_REQUIEREMENTS = '/technical_requirements'
const PEDAGOGICAL_REQUIEREMENTS = '/pedagogical_requirements'
const RIGHTS_OF_USE = '/rights_of_use'
const ANOTATIONS = '/anotation'
const CLASSIFICACION = '/classification'
const PUBLICAR = '/publicar'
const PUBLICAR_CONTAR = '/publicar/contar'
const FILES_STATE = `${FILES}/state`
const RIGHTS_OF_USE_CONTAR = '/rights_of_use/contar'
const ANOTATIONS_CONTAR = '/anotation/contar'
const CLASSIFICACION_CONTAR = '/classification/contar'
const LIFECYCLE_CONTAR = '/lifecycle/contar'
const TECHNICAL_REQUIEREMENTS_CONTAR = '/technical_requirements/contar'
const PEDAGOGICAL_REQUIEREMENTS_CONTAR = '/pedagogical_requirements/contar'
const GENERAL_CONTAR = `${FILES}/general/contar`
const USERS_CONTAR = '/users/contar'

const STADISTICS = '/stadistics'

const HEALTH = '/health'
module.exports = {
    AUTH,
    USERS,
    HEALTH,
    FILES,
    FILES_MAIL,
    FILES_ALL,
    GENERAL,
    UPLOAD,
    CALLBACK,
    GOOGLE,
    LIFECYCLE,
    META_METADATA,
    TECHNICAL_REQUIEREMENTS,
    PEDAGOGICAL_REQUIEREMENTS,
    RIGHTS_OF_USE,
    ANOTATIONS,
    CLASSIFICACION,
    PUBLICAR,
    PUBLICAR_CONTAR,
    FILES_STATE,
    RIGHTS_OF_USE_CONTAR,
    ANOTATIONS_CONTAR,
    CLASSIFICACION_CONTAR,
    LIFECYCLE_CONTAR,
    TECHNICAL_REQUIEREMENTS_CONTAR,
    PEDAGOGICAL_REQUIEREMENTS_CONTAR,
    GENERAL_CONTAR,
    USERS_CONTAR,
    STADISTICS,
    MICROSOFT,
    MICROSOFT_CALLBACK,
    ROLES
}
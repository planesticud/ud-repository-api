const { 
    PORT,
    CLIENT_ID,
    SECRET,
    CALLBACK_URL,
    USERS_URL,
    FILES_URL,
    PUBLICAR_URL,
    GOOGLE_URL_TOKEN,
    BUCKET_NAME,
    ACL,
    URL_S3_BASE
} = process.env
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey  = process.env.AWS_SECRET_ACCESS_KEY
const  region = process.env.AWS_DEFAULT_REGION
const bucket = process.env.BUCKET_NAME

const credentials = {
  accessKeyId,
  secretAccessKey,
  region,
  bucket
}

module.exports={
    port: PORT,
    clientId: CLIENT_ID,
    secret: SECRET,
    callback: CALLBACK_URL,
    usersUrl: USERS_URL,
    filesUrl: FILES_URL,
    publicarUrl: PUBLICAR_URL,
    googleUrlToken: GOOGLE_URL_TOKEN,
    bucketName: BUCKET_NAME,
    acl: ACL,
    urlS3Base: URL_S3_BASE,
    credentials
}
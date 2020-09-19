const { 
    PORT,
    CLIENT_ID,
    SECRET,
    CALLBACK_URL,
    USERS_URL,
    FILES_URL,
    GOOGLE_URL_TOKEN,
    BUCKET_NAME,
    ACL,
    URL_S3_BASE
} = process.env

module.exports={
    port: PORT,
    clientId: CLIENT_ID,
    secret: SECRET,
    callback: CALLBACK_URL,
    usersUrl: USERS_URL,
    filesUrl: FILES_URL,
    googleUrlToken: GOOGLE_URL_TOKEN,
    bucketName: BUCKET_NAME,
    acl: ACL,
    urlS3Base: URL_S3_BASE
}
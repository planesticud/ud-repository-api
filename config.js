const { 
    PORT,
    CLIENT_ID,
    SECRET,
    CALLBACK_URL,
    USERS_URL,
    GOOGLE_URL_TOKEN
} = process.env

module.exports={
    port: PORT,
    clientId: CLIENT_ID,
    secret: SECRET,
    callback: CALLBACK_URL,
    usersUrl: USERS_URL,
    googleUrlToken: GOOGLE_URL_TOKEN
}
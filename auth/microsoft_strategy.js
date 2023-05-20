const passport = require('passport');
var MicrosoftStrategy = require('passport-microsoft').Strategy;
const { 
       CLIENT_ID_MICROSOFT,
       CLIENT_SECRET_MICROSOFT,
       CALLBACK_URL_MICROSOFT,
   } = process.env
   const extractProfile = (profile, token) => {
    let imageUrl = ''
    
    if (profile.photos && profile.photos.length) {
    imageUrl = profile.photos[0].value;
    }
    
    return {
    id: profile.id,
    displayName: profile.displayName,
    image: imageUrl,
    token,
    name: profile.name,
    emails : profile.emails,
    }
    }

    passport.use(new MicrosoftStrategy({
        // Standard OAuth2 options
        clientID: CLIENT_ID_MICROSOFT,
        clientSecret: CLIENT_SECRET_MICROSOFT,
        callbackURL: CALLBACK_URL_MICROSOFT,
        scope: ['user.read'],

        // Microsoft specific options

        // [Optional] The tenant for the application. Defaults to 'common'. 
        // Used to construct the authorizationURL and tokenURL
        tenant: 'common',

        // [Optional] The authorization URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`
        authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',

        // [Optional] The token URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`
        tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
      },
      function(accessToken, refreshToken, profile, done) {
        done(null, extractProfile(profile, accessToken))
        
      }
    ));
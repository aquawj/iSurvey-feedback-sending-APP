const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback' //after user granted, we direct him to this url
    },
    (accessToken, refreshToken, profile, done)=>{   //when back to server from google, this callback will run
    console.log('access token: ', accessToken);
    console.log('refresh token: ', refreshToken);
    console.log('profile: ', profile);
}));


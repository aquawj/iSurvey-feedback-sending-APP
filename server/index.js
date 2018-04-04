const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback' //after user granted, we direct him to this url
},
    (accessToken, refreshToken, profile, done)=>{   //when back to server from google, this callback will run
        console.log('access token:  ', accessToken);
        console.log('refresh token:  ', refreshToken);
        console.log('profile:  ', profile);
}));

app.get('/auth/google', passport.authenticate('google',{
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
    console.log('Use Ctr-C to stop this server');
});
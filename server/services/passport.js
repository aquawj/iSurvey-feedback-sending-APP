const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {  //user -> id
    done(null, user.id);
});

passport.deserializeUser((id, done) => {  // id -> user
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback', //after user granted, we direct him to this url
        proxy: true
    },
    (accessToken, refreshToken, profile, done) => {   //when back to server from google, this callback will run
        User.findOne({googleId: profile.id}).then(existingUser => { //collection query, find the first
            if(existingUser) {
                done(null, existingUser); //everything is ok, call done()
            }else{
                new User({googleId: profile.id}).save()  //new model instance and save it to mongoDB
                .then(user => done(null, user));   //when succeed, call done()
            }
       });
}));


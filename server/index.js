const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User'); //model definition first, then passport
require('./services/passport'); //no return, so no need to assign it to const variable


mongoose.connect(keys.mongoURI);

const app = express();
app.use(cookieSession({
    maxAge: 30*24*60*60*1000,  //automatically expire after it
    keys: [keys.cookieKey] //encrypt user id
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // require and call immediately

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost: ${PORT}`);
    console.log('Use Ctr-C to stop this server');
});
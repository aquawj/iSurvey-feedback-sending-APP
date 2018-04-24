const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');
require('./models/Survey');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey] //encrypt user id
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // require and call immediately
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') { // in production environment
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost: ${PORT}`);
    console.log('Use Ctr-C to stop this server');
});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('./services/passport'); //no return, so no need to assign it to const variable
require('./routes/authRoutes')(app); // require and call immediately

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost: ${PORT}`);
    console.log('Use Ctr-C to stop this server');
});
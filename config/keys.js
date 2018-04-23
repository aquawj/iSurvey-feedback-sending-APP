if(process.env.NODE_ENV === 'production'){ // on heroku (production env)
    module.export = require('./prod');
}else{ //local machine, return true keys
    module.exports = require('./dev');
}
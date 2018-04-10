const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const {Schema} = mongoose;

const userSchema = new Schema({ //define properties
    googleId: String
});

//create a new collection: users
mongoose.model('users', userSchema); //model(mongoose) = collection(mongoDB)
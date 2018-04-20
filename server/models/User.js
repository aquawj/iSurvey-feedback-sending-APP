const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const {Schema} = mongoose;

const userSchema = new Schema({ //define properties
    googleId: String,
    credits: {type: Number, default: 0}
});

//create a new collection: users
mongoose.model('users', userSchema); //model(mongoose) = collection(mongoDB)
const mongoose = require('mongoose');
const url = 'mongodb://0.0.0.0:27017/graphis-design';
mongoose.set('strictQuery', false);

const connecToMongoose = ()=>{
    mongoose.connect(url);
};

module.exports = connecToMongoose;
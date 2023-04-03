const mongoose = require('mongoose');
const { Schema } = mongoose;


const ServicesSchema = new Schema({
    //Primary key --> Foriegn Key Definition
    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'model name'
    // },
    //All required fields here
    title:{
        type: String
    },
    description:{
        type: String
    },
    photo:{
        type: String
    },
    price:{
        type: Number
    },
    date:{
        type: Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model('services', ServicesSchema);
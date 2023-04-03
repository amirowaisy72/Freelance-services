const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessagesSchema = new Schema({
    //Primary key --> Foriegn Key Definition
    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'model name'
    // },
    //All required fields here
    fname:{
        type: String
    },
    lname:{
        type: String
    },
    mobile:{
        type: String
    },
    service:{
        type: String
    },
    msg:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model('messages', MessagesSchema);
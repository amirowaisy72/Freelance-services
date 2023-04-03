const mongoose = require('mongoose');
const { Schema } = mongoose;


const ToolsSchema = new Schema({
    //Primary key --> Foriegn Key Definition
    serviceId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'services'
    },
    //All required fields here
    toolTitle:{
        type: String
    },
    toolDescription:{
        type: String
    },
    toolPhoto:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model('tools', ToolsSchema);
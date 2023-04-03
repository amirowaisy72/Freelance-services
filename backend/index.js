const connecToMongoose = require('./db');
const express = require('express');
const app = express();
connecToMongoose();
var cors = require('cors');

app.use(express.json());
app.use(cors());
//Available Routes
app.use('/portfolio', require('./routes/portfolio.js'));
app.use('/services', require('./routes/services.js'));
app.use('/tools', require('./routes/tools.js'));
app.use('/messages', require('./routes/messages.js'));

app.listen(5000, ()=>{
    console.log('listening at port 5000');
})

//import mongoose library
const mongoose = require('mongoose');

// connection to db
mongoose.connect(`mongodb://localhost/question_bank_db`, {useNewUrlParser: true, useUnifiedTopology: true});

// get connection in a constant named db
const db = mongoose.connection;

//handle error
db.on('error', console.error.bind(console,"Error in connecting to Database"));

//if connected print the message
db.once('open',function(){
    console.log('Connected to Database');
})
module.exports = db;
const mongoose = require('mongoose');

const { database } = require('./keys');
mongoose.set('useFindAndModify', false);
mongoose.connect(database.URI,{ useNewUrlParser: true, useUnifiedTopology: true} )
    .then (db => console.log('DB is Conected'))
    .catch (err => console.log(err));
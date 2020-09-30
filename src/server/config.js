const path = require('path');
const exphbs = require('express-handlebars');
const express = require('express');
const routes = require('../routes/index');
const errorHandler = require('errorhandler');


module.exports = app =>{

    // Settings 
    app.set('port', process.env.PORt || 3000);
    app.set('views', path.join(__dirname, 'views'));

    app.engine('.hbs', exphbs({
        defaultLayaut: 'main',
        extname: '.hbs',
        helpers: require('./helpers')
    }));
    app.set('view engine', '.hbs');

    //middlewares
    app.use(express.json());

    //rutes
    routes(app);

    //errorhandlers
    if('development'=== app.get('env')) {
        app.use(errorHandler)
    }


    return app;
}
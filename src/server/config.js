const path = require('path');
const exphbs = require('express-handlebars');
const express = require('express');
const routes = require('../routes/index');
const errorHandler = require('errorhandler');


module.exports = app =>{

    // Settings 
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, '../views'));

    app.engine('.hbs', exphbs({
        defaultLayaut: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs',
        helpers: require('./helpers')
    }));
    app.set('view engine', '.hbs');

    //middlewares
    app.use(express.json());

    //rutes
    routes(app);

    app.use("/public", express.static(path.join(__dirname, "../public")));

    
    //errorhandlers
    if('development'=== app.get('env')) {
        app.use(errorHandler)
    }

    

    return app;
}
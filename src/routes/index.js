const express = require('express');
const router = express.Router();

const home = require ('../controlers/home');

module.exports = app => {
    router.get('/', home.index);
    router.post('/exp/calculate', home.calculate);

    app.use(router);
};

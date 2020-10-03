const express = require('express');
const router = express.Router();

const home = require ('../controlers/home');

module.exports = app => {
    router.get('/', home.index);
    router.post('/save', home.save);
    router.get('/:last_calc_id/last', home.last);

    app.use(router);
};

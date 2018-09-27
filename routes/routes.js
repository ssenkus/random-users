//const express = require('express');
const userRoutes = require('./userRoutes');

exports.configure = (app) => {
//    app.use('/', express.static(`${__dirname}/../dashboard/build`));
    userRoutes.configure(app);
};
const express = require('express');
const routes = express.Router();
const relevantEmployee = require('./src/relevantEmployees/relevantEmployees.route');

routes.use(relevantEmployee);

module.exports = routes;

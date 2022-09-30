const express = require('express');
const routes = express.Router();
const { filteredEmployees } = require('./relevantEmployees.controller');
const { validateQuery } = require("./validate.request");

routes.get('/employees', validateQuery, filteredEmployees);

module.exports = routes

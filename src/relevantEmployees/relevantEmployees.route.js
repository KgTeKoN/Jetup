const express = require('express');
const routes = express.Router();
const { filteredEmployees } = require('./relevantEmployees.controller');

routes.get('/employees', filteredEmployees);

module.exports = routes

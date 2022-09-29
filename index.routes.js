const express = require('express');
const routes = express.Router();
const relevantEmployee = require('./src/relevantEmployees/relevantEmployees.route')
const { addAllEmployee } = require("./src/transferEmployeesInfo/registerEmployeeInDB");
const { parseSite } = require("./src/transferEmployeesInfo/receiveEmployeesInfo");

(async () => {
    const receiveData = await parseSite()
    await addAllEmployee(receiveData)
})();

routes.use(relevantEmployee);

module.exports = routes;

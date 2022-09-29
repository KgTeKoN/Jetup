const express = require('express');
const routes = express.Router();
const { addAllEmployee } = require("./src/transferEmployeesInfo/registerEmployeeInDB");
const { parseSite } = require("./src/transferEmployeesInfo/receiveEmployeesInfo");

(async () => {
    const receiveData = await parseSite()
    await addAllEmployee(receiveData)
})();

//routes.use();

module.exports = routes;

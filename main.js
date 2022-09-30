const port = require('./config.js');
const express = require('express');
const routes = require('./index.routes.js');
const { addAllEmployee } = require("./src/transferEmployeesInfo/registerEmployeeInDB");
const { parseSite } = require("./src/transferEmployeesInfo/receiveEmployeesInfo");

const app = express();
app.use(routes);

(async () => {
    const receiveData = await parseSite()
    await addAllEmployee(receiveData)
})();

app.listen(port, () => console.log('Server has been started'));

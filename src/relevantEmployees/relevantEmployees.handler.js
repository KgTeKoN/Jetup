const PersonController = require('../PersonCRUD/person.controller')

const filterEmployees = async (data) => {
    if(!data.hasOwnProperty('filter')) {
        const result = await PersonController.getAllEmployeesController();
        return result
    }
    const result = await PersonController.findPersonWithFilterController(data.filter);
    return result;
}

module.exports = { filterEmployees }

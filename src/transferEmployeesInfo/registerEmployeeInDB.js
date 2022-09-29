const PersonController = require('../PersonCRUD/person.controller')
const { signUpValidator } = require("./validate.inputData");

const addOneEmployee = async (data) => {
    await signUpValidator(data);
    await PersonController.createPerson(data[0], data[1], data[2]);
}

const addAllEmployee = async (arr) => {
    for(let i = 0; i < arr.length; i++) {
        await addOneEmployee(arr[i]);
    }
}

module.exports = { addAllEmployee }

const personDAO = require('./dao')

class PersonController {
    async createPerson(name, position, essay) {
        try {
            const result = await personDAO.createPerson(name, position, essay);
            return result
        } catch (err) {
            console.log(err.message);
        }
    }

    async findPersonWithFilterController(string) {
        try {
            const result = await personDAO.findPersonWithFilter(string);
            return result
        } catch (err) {
            console.log(err.message);
        }
    }
}

module.exports = new PersonController();

const db = require('../knex/db')

class PersonDAO {
   async createPerson(name, position, essay) {
        await db('employees').insert({
            name: name,
            position: position,
            essay: essay
        })
    }
}

module.exports = new PersonDAO()

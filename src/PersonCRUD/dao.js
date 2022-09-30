const db = require('../knex/db')

class PersonDAO {
   async createPerson(name, position, essay) {
        await db('employees').insert({
            name: name,
            position: position,
            essay: essay
        })
    }

    async findPersonWithFilter(string) {
        const result = await db('test_task_jetup').from('employees').whereLike(`name`,`%${string}%`)
            .orWhereLike(`position`, `%${string}%`)
            .orWhereLike(`essay`, `%${string}%`)
            .select('name', 'position', 'essay');
        return result;
   }

    async getAllEmployees () {
        const result = await db('test_task_jetup').from('employees')
            .select('name', 'position', 'essay');
        return result;
    }
}

module.exports = new PersonDAO()

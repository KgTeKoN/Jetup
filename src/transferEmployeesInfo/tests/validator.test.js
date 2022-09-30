const { employeesSchema } = require('../validate.schema')

describe('validate transfer schema', () => {

    test('validate correct data', async () => {
        const obj1 = {name: 'Andriy', position: 'Developer', essay: 'I am interesting in back-end'};
        await expect(employeesSchema.validateAsync(obj1)).resolves.toEqual(obj1);
    })

    test('try invalid position (is not be empty)', async () => {
        const obj2 = {name: 'Andriy', position: '', essay: 'I am interesting in back-end'};
        await expect(employeesSchema.validateAsync(obj2)).rejects.toThrow("\"position\" is not allowed to be empty");
    })

    test('try invalid position (must be a string)', async () => {
        const obj3 = {name: 'Andriy', position: 34, essay: 'I am interesting in back-end'};
        await expect(employeesSchema.validateAsync(obj3)).rejects.toThrow("\"position\" must be a string");
    })

    test('try invalid name (must be a string)', async() => {
        const obj4 = {name: 34, position: 'Developer', essay: 'I am interesting in back-end'};
        await expect(employeesSchema.validateAsync(obj4)).rejects.toThrow("\"name\" must be a string");
    })

    test('try invalid name (must only contain alpha-numeric characters)', async() => {
        const obj5 = {name: 'Христофор', position: 'Developer', essay: 'I am interesting in back-end'};
        await expect(employeesSchema.validateAsync(obj5)).rejects.toThrow("\"name\" must only contain alpha-numeric characters");
    })

    test('try invalid name (is not be empty)', async() => {
        const obj6 = {name: '', position: 'Developer', essay: 'I am interesting in back-end'};
        await expect(employeesSchema.validateAsync(obj6)).rejects.toThrow("\"name\" is not allowed to be empty");
    })

    test('try invalid essay (must be a string)', async() => {
        const obj7 = {name: 'Andriy', position: 'Developer', essay: 75};
        await expect(employeesSchema.validateAsync(obj7)).rejects.toThrow("\"essay\" must be a string");
    })

    test('try invalid essay (is not be empty)', async() => {
        const obj8 = {name: 'Andriy', position: 'Developer', essay: ''};
        await expect(employeesSchema.validateAsync(obj8)).rejects.toThrow("\"essay\" is not allowed to be empty");
    })
})

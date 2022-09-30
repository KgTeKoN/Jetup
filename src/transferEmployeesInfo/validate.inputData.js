const { employeesSchema } = require('./validate.schema.js');

const signUpValidator = async (arr) => {
        const objectData = {
                name: arr[0],
                position: arr[1],
                essay: arr[2]
        }
        try {
                await employeesSchema.validateAsync(objectData);
                return true;
        } catch (e) {
                return false
        }

};

module.exports = { signUpValidator };

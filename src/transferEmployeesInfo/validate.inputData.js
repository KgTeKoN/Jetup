const { employeesSchema } = require('./validate.schema.js');

const signUpValidator = async (objectData) => {
  try {
    await employeesSchema.validateAsync(objectData);
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = { signUpValidator };

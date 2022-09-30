const Joi = require('joi');

const employeesSchema = Joi.object({
    filter: Joi.string().required(),
});

module.exports = { employeesSchema };

const Joi = require('joi');

const employeesSchema = Joi.object({
    name: Joi.string().alphanum().required(),
    position: Joi.string().required(),
    essay: Joi.string().required()
});

module.exports = { employeesSchema };

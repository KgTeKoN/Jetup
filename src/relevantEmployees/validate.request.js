const { employeesSchema } = require("./validate.schema");

const validateQuery = async (req, res, next) => {
    try {
        if(req.query.hasOwnProperty('filter')) {
            await employeesSchema.validateAsync(req.query);
        }
        return next();
    } catch (e) {
        const result = e.details[0].message;
        res.status(400).send(result);
        res.end();
    }
}

module.exports = { validateQuery }

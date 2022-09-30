const { filterEmployees } = require('./relevantEmployees.handler');

const filteredEmployees = async (req, res) => {
  const result = await filterEmployees(req.query);
  res.status(201).json(result);
  res.end();
};

module.exports = { filteredEmployees };

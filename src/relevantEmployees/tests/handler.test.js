const { filterEmployees } = require('../relevantEmployees.handler');
const PersonController = require('../../PersonCRUD/person.controller');

jest.mock('../../PersonCRUD/person.controller', () => {
  const originalModule = jest.requireActual(
    '../../PersonCRUD/person.controller',
  );

  return {
    __esModule: true,
    ...originalModule,
    getAllEmployeesController: jest.fn(() => 'all employees'),
    findPersonWithFilterController: jest.fn(() => 'some employees'),
  };
});

describe('test handler', () => {
  test('getAllEmployeesController must be called one time', async () => {
    const data = 'inputData';
    await filterEmployees(data);

    expect(PersonController.findPersonWithFilterController).toBeCalledTimes(0);
    expect(PersonController.getAllEmployeesController).toBeCalledTimes(1);
  });

  test('findPersonWithFilterController must be called one time with inputData', async () => {
    const data = { filter: 'inputData' };
    await filterEmployees(data);

    expect(PersonController.findPersonWithFilterController).toBeCalledWith(
      'inputData',
    );
    expect(PersonController.findPersonWithFilterController).toBeCalledTimes(1);
    expect(PersonController.getAllEmployeesController).toBeCalledTimes(1);
  });
});

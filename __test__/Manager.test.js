// testing manager function
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('testing manager office number)', () => {
  const manager = new Manager('name', 256, 'nicooo@gmail.com', 1042);

  expect(manager.officeNumber).toEqual(expect.any(Number));
}); 

test('tests getOfficeNumber()', () => {
  const manager = new Manager('name', 256, 'nicooo@gmail.com', 1042);

  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})

test('test getrole()', () =>  {
  const manager = new Manager('nico')

  expect(manager.getRole()).toBe('Manager');
});
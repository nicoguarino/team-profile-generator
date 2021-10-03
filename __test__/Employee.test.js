const Employee = require('../lib/Employee');

// testing employee function

// test  to pull employee expectations 
test('creates new employee object', () => {
    const employee = new Employee('Nico', 256, 'nicoooo@gmail.com');

    expect(employee.name).toBe('Nico');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('nicoooo@gmail.com');
});

test('Testing getName()', () =>{
  const employee = new Employee('Nico');

  expect(employee.getName()).toBe('Nico');
});

test('testing getId()', () => {
  const id = new Employee('Nico', 256);

  expect(id.getId()).toEqual(expect.any(Number));
});

test('Testing getEmail()', () => {
  const email = new Employee('Nico', 256, 'nicoooo@gmail.com');

  expect(email.getEmail()).toBe('nicoooo@gmail.com');
});

test('Testing getRole()', () => {
  const role = new Employee('Employee');

  expect(role.getRole()).toBe('Employee');
});